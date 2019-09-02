import React from 'react';
import Message from './Message/Message';
//images
import avatar from './Message/images/avatar.png';

export const ChatList = (props) => {
  console.log(props.messages.length);
  const { messages } = props;
  return (
    <section className="chat-list">
      <div className="content">
        {(messages) 
          ? <ul className="messages-list">
              {messages.map(message => (
                <Message
                  classWrap={(message.user === props.userName) 
                    ? "message-wrap my-message-wrap" : "message-wrap"}
                  classMessage={(message.user === props.userName) 
                    ? "message my-message" : "message"}
                  classLikeWrap={(message.user === props.userName) 
                    ? "display-none" : "message-like-wrap"}
                  key={message.id}
                  avatar={message.avatar 
                    ? message.avatar : avatar}
                  createdTime={message.created_at}
                  name={message.user}
                  message={message.message}
                />
            ))}
            </ul> : null}
            <p>{props.newMessage}</p>
      </div>
    </section>
  );
}

export default ChatList;