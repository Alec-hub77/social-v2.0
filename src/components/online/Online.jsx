import './online.scss';

function Online({ user }) {
  const PF = process.env.REACT_APP_PABLIC_FOLDER
  return (
    <li className="rightbarFriend">
      <div className="profileContainer">
        <img className="rightbarProfileImg" src={PF+user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
