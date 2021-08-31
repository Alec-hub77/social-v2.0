import React from 'react';
import './feed.scss';
import axios from 'axios';
import Share from './../share/Share';
import Post from '../post/Post';
import {AuthContext} from '../../contex/AuthContext';


export default function Feed({username}) {
  const [posts, setPosts] = React.useState([])
  const {user} = React.useContext(AuthContext)

  React.useEffect(() => {
     const fethPosts = async () => {
       const res = username
       ? await axios.get(`/posts/profile/${username}`)
       : await axios.get(`/posts/timeline/${user._id}`);
       setPosts(res.data.sort((p1,p2) => {
         return new Date(p2.createdAt) - new Date(p1.createdAt)
       }))  
      }   
     fethPosts()
  }, [username, user._id])
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
