import React from 'react';
import { Feed, Leftbar, Rightbar, Topbar } from '../../components';
import './profile.scss';
import axios from 'axios';
import { useParams } from 'react-router'

function Profile() {
  const PF = process.env.REACT_APP_PABLIC_FOLDER
  const [user, setUser] = React.useState({})
  const username = useParams().username
  

  React.useEffect(() => {
    const fetchUsers = async () => {
        const res = await axios.get(`/users?username=${username}`)
        setUser(res.data)
    }
    fetchUsers()
  }, [username]);

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
                src={PF+"post/3.jpeg"}
                alt=""
              />
              <img className="profileUserImg" src={user.profilePicture ? PF+user.profilePicture : PF+ "/person/no-avatar.png"} alt="" />
            </div>
            <div className="profileInfo">
              <h4>{user.username}</h4>
              <span>{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
