import React from 'react';
import './messenger.scss';
import { Topbar, Conversation, Message, ChatOnline } from '../../components';
import { AuthContext } from '../../contex/AuthContext';
import axios from 'axios';
import {io} from 'socket.io-client';

function Messenger() {
  const { user } = React.useContext(AuthContext);
  const [conversations, setConversations] = React.useState([]);
  const [currentChat, setCurrentChat] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState("");
  const [arrivalMessage, setArrivalMessage] = React.useState(null);
  const [onlineUsers, setOnlineUsers] = React.useState([]);
  
  const socket = React.useRef()
  const scrollRef = React.useRef()
  

  React.useEffect(() => {
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  })

  React.useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages(prev => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  React.useEffect(() => {
    socket.current.emit("addUser", user._id)
    socket.current.on("getUsers", users => {
      setOnlineUsers(user.followings.filter(f => users.some(u => u.userId === f)))
    })
  }, [user])


  React.useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/conversations/${user._id}`);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);

  React.useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messages/${currentChat?._id}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id
    }

    const receiverId = currentChat.members.find(member => member !== user._id)

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage, 
    })
    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("")
    } catch (error) {
      console.log(error)
    }
  }


  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  
  
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversations.map((c) => (
              <div key={c._id} onClick={() => setCurrentChat(c)}>
                <Conversation key={c._id} conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div key={m._id} ref={scrollRef}>
                      <Message key={m._id} message={m} own={m.sender === user._id}/>
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Enter your message"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  {newMessage ? <button className="chatSubmitBtn" onClick={handleSubmit}>Send</button>: <button className="chatSubmitBtn" disabled style={{cursor: 'default'}} >Send</button>}
                  
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open conversation to start a chat
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline 
            onlineUsers={onlineUsers} 
            currentId={user._id} 
            setCurrentChat={setCurrentChat} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
