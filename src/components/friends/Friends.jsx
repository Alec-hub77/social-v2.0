import './friends.scss';

function Friends({user}) {
  return (
    <>
      <ul className="leftbarFriendsList">
        <li className="sidebarFriend">
          <img src={user.profilePicture} alt="" />
          <span>{user.username}</span>
        </li>
      </ul>
    </>
  );
}

export default Friends;
