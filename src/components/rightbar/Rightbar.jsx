import './rightbar.scss';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ user }) {
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
    const PF = process.env.REACT_APP_PABLIC_FOLDER
    return (
      <>
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
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PF+"person/4.jpeg"} alt="" />
            <span>John Doe</span>
          </div>
        </div>
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ?<ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  );
}
