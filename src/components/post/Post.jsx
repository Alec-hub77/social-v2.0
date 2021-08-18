import React from 'react'
import { MoreVert } from '@material-ui/icons'
import './post.scss'
import { Users } from '../../dummyData';

function Post({post}) {
    
    const [like, setLike] = React.useState(post.like)
    const [isliked, setIsLiked] = React.useState(false)
    const onClickLike = () => {
        setLike(isliked ? like -1 : like +1 )
        setIsLiked(!isliked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u=>u.id === post?.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(u=> u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={onClickLike} className="likeIcon" src="/assets/like.png" alt="" />
                        <img onClick={onClickLike} className="likeIcon" src="/assets/heart.png" alt="" />
                        <div className="postLikeCounter">{like} people like it</div>
                        <img className="likeIcon" src="/assets/unlike.png" alt="" />
                        <div className="postLikeCounter">120 people think its shit</div>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} { post.comment <= 1 ? "comment" : "comments"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
