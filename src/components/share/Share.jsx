import './share.scss'
import {useContext, useRef, useState} from 'react'
import { AuthContext } from '../../contex/AuthContext';
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';

function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PABLIC_FOLDER
    const [file, setFile] = useState(null)
    const desc = useRef();
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+ "/person/no-avatar.png"} alt="" />
                    <input ref={desc} placeholder={`Want to post some shit ${user.username} ?`} />
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom">
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
                    <button className="shareBtn">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
