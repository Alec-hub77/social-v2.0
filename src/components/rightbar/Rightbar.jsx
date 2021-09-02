import './rightbar.scss';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contex/AuthContext';
import {Add, Remove} from '@material-ui/icons'

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PABLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));
  
  
  
  useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(`/users/friends/${user._id}`);
          setFriends(friendList.data);
        } catch (error) {
          console.log(error);
        }
      };
      getFriends();   
  }, [user]);


  const followHandler = async () => {
    try {
      if(followed) {
        await axios.put(`/users/${user._id}/unfollow`, {userId: currentUser._id})
        dispatch({type: 'UNFOLLOW', payload: user._id})
      } else {
        await axios.put(`/users/${user._id}/follow`, {userId: currentUser._id})
        dispatch({type: 'FOLLOW', payload: user._id})
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  }

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" />
          <span>
            <b>John Doe</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    
    return (
      <>
      {user.username !== currentUser.username && (
      <button className="rightbarFollowBtn" onClick={followHandler}>
        {followed ? "Unfollow" : "Follow"}
        {followed ? <Remove/> : <Add/>}
        </button>
    )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend => (
            
            <Link key={friend._id} to={`/profile/${friend.username}`}>
            <div  className="rightbarFollowing">
            <img src={friend.profilePicture ? PF + friend.profilePicture : PF+ "person/no-avatar.png"} alt="" />
            <span>{friend.username}</span>
          </div>
          </Link>
          ))}
          
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
