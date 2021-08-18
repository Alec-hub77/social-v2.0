import './rightbar.scss'

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" />
                    <span><b>John Doe</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendsList">
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/4.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/5.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/6.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/7.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/8.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/9.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileContainer">
                            <img className="rightbarProfileImg" src="assets/person/10.jpeg" alt="" />
                        <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
