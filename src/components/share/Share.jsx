import './share.scss'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/shit3.png" alt="" />
                    <input placeholder="Whats the shit happens" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="red" className="shareIcon"/>
                            <span>Photo or Video</span>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default Share
