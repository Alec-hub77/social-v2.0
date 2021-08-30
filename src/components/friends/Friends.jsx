import './friends.scss';

function Friends({user}) {
  const PF = process.env.REACT_APP_PABLIC_FOLDER
  return (
    <>
      <ul className="leftbarFriendsList">
        <li className="sidebarFriend">
          <img src={PF+user.profilePicture} alt="" />
          <span>{user.username}</span>
        </li>
      </ul>
    </>
  );
}

export default Friends;
