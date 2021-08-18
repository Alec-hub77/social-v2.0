import React from 'react';
import { Feed, Leftbar, Rightbar, Topbar } from '../../components';
import './profile.scss';

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img className="profileUserImg" src="assets/shit3.png" alt="" />
            </div>
            <div className="profileInfo">
              <h4>John Doe</h4>
              <span>Some Description</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
