import './topbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons/';
import { Link } from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from './../../contex/AuthContext';

function Topbar() {
  const {user} = useContext(AuthContext)

  const PF = process.env.REACT_APP_PABLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">SocialShit</span>
        </Link>
        <div className="logoImg">
          <img src={PF + 'shit2.png'} alt="logo" />
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for another shit..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/messenger" style={{color: "#fff"}}>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/no-avatar.png'} alt="ava" className="topbarImg" />
        <span className="topbarUserName">{user.username || ''}</span>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
