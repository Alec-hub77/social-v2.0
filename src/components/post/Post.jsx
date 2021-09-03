import React from 'react';
import { MoreVert, Cancel } from '@material-ui/icons';
import './post.scss';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contex/AuthContext';

function Post({ post }) {
  const [like, setLike] = React.useState(post.likes.length);
  const [unlike, setUnlike] = React.useState(57);
  const [isliked, setIsLiked] = React.useState(false);
  const [user, setUser] = React.useState({});
  
  const PF = process.env.REACT_APP_PABLIC_FOLDER;
  const {user: currentUser} = React.useContext(AuthContext)
  
  React.useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  React.useEffect(() => {
    const fetchUsers = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`)
        setUser(res.data)
    }
    fetchUsers()
  }, [post.userId]);

  const onClickLike = () => {
    try {
      axios.put(`/posts/${post._id}/like`, {userId: currentUser._id})
      
    } catch (error) {
      
    }
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  const onClickUnlike = () => {
    setUnlike(isliked ? unlike - 1 : unlike + 1);
    setIsLiked(!isliked);
  };

  //  POPUP

  const [menu, setMenu] = React.useState(false)
  const menuHandler = () => {
    setMenu(!menu)
  }

  const popupRef = React.useRef()
  const handleOutsideClick = (e) => {
    if(!e.path.includes(popupRef.current)){
      setMenu(false)
    }
    }
React.useEffect(() => {
  document.body.addEventListener('click', handleOutsideClick)
}, [])

  const onDeletePost = () => {
    try {
       axios.delete(`/posts/${post._id}`, {userId: currentUser._id});
       window.location.reload()
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture ? PF + user.profilePicture : PF + 'person/no-avatar.png'}
                alt=""
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div  ref={popupRef} className="postTopRight" onClick={menuHandler}>
            <MoreVert />
            {menu && <div className="postTopRightMenu">
              <span onClick={onDeletePost}>Delete Post <Cancel style={{fontSize: "15px"}}/></span>
            </div>}
          </div>
          
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={onClickLike}
              className="likeIcon"
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={onClickLike}
              className="likeIcon"
              src="/assets/heart.png"
              alt=""
            />
            <div className="postLikeCounter">{like} people like it</div>
            <img
              onClick={onClickUnlike}
              className="likeIcon"
              src="/assets/unlike.png"
              alt=""
            />
            <div className="postLikeCounter">
              {unlike} people think its shit
            </div>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comment} {post.comment <= 1 ? 'comment' : 'comments'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
