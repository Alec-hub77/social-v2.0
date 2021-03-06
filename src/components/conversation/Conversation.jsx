import React from 'react'
import './conversation.scss'
import axios from 'axios'

function Conversation({conversation, currentUser}) {
    const [user, setUser] = React.useState(null)
    const PF = process.env.REACT_APP_PABLIC_FOLDER
    
    React.useEffect(() => {
        const friendId = conversation.members.find(m=> m !== currentUser._id)
        const getUser = async () => {
           try{
            const res = await axios.get(`/users?userId=${friendId}`)
            setUser(res.data)
           } catch (error) {
               console.log(error)
           }
        }
        getUser()
    }, [currentUser, conversation])

    
    return (
        <div className="conversation">
           <img src={user?.profilePicture ? PF + user.profilePicture : PF+"person/no-avatar.png"} alt="" className="conversationImg" />
            <span className="conversationName">{user?.username}</span>
        </div>
        
    )
}

export default Conversation
