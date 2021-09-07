import React from 'react';
import './chatOnline.scss';
import axios from 'axios';

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = React.useState([]);
  const [onlineFriends, setOnlineFriends] = React.useState([]);

  const PF = process.env.REACT_APP_PABLIC_FOLDER;

  React.useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`/users/friends/${currentId}`);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [currentId]);

  React.useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
        try {
            const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);
            setCurrentChat(res.data)
        } catch (error) {
            console.log(error)
        }
  }

  return (
    <div className="chatOnline">
      {onlineFriends.map((of) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(of)} style={{cursor: "pointer"}}>
          <div className="chatonlineImgContainer">
            <img src={of?.profilePicture ? PF+ of.profilePicture: PF + 'person/no-avatar.png'} alt="" />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{of?.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
