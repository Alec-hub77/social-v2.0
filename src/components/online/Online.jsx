import './online.scss';

function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="profileContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
