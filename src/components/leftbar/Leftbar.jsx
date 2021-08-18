import './leftbar.scss'
import {RssFeed, Message, PlayCircleFilled, Group, Bookmarks, Help, Work, Event, School} from '@material-ui/icons'

function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li>
                        <RssFeed className="leftbarIcon"/>
                        <span>Feed</span>
                    </li>
                    <li>
                        <Message className="leftbarIcon"/>
                        <span>Chat</span>
                    </li>
                    <li>
                        <PlayCircleFilled className="leftbarIcon"/>
                        <span>Videos</span>
                    </li>
                    <li>
                        <Group className="leftbarIcon"/>
                        <span>Groups</span>
                    </li>
                    <li>
                        <Bookmarks className="leftbarIcon"/>
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <Help className="leftbarIcon"/>
                        <span>Questions</span>
                    </li>
                    <li>
                        <Work className="leftbarIcon"/>
                        <span>Jobs</span>
                    </li>
                    <li>
                        <Event className="leftbarIcon"/>
                        <span>Events</span>
                    </li>
                    <li>
                        <School className="leftbarIcon"/>
                        <span>Courses</span>
                    </li>
                </ul>
                <button>Show More</button>
                <hr />
                <ul className="leftbarFriendsList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/7.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/8.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/9.jpeg" alt="" />
                        <span>John Doe</span>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Leftbar
