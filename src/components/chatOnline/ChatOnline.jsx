import React from 'react'
import './chatOnline.scss'

function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatonlineImgContainer">
                    <img src="assets/person/doe.png" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}

export default ChatOnline
