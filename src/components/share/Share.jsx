import './share.scss'
import {useContext, useRef, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../../contex/AuthContext';
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from '@material-ui/icons';

function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PABLIC_FOLDER
    const [file, setFile] = useState(null)
    const desc = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            
            try {
                await axios.post("/upload", data)
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        }
        try {
           await axios.post('/posts', newPost)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+ "/person/no-avatar.png"} alt="" />
                    <input ref={desc} placeholder={`Want to post some shit ${user.username} ?`} />
                </div>
                <hr className="shareHr"/>
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="red" className="shareIcon"/>
                            <input style={{display: 'none'}} type="file" id="file" accept=".png,.jpg,.jpeg,.gif" onChange={(e) => setFile(e.target.files[0])}/>
                            <span>Photo or Video</span>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue"className="shareIcon"/>
                            <span>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green"className="shareIcon"/>
                            <span>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod"className="shareIcon"/>
                            <span>Feelings</span>
                        </div>
                    </div>
                    <button className="shareBtn" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
