import React from 'react';
import Message from './Message/Message';

export const ChatList = (props) => {
  return (
    <section className="chat-list">
      <div className="content">
        {(props.messages) 
          ? <ul className="messages-list">
              {props.messages.map(message => (
                <Message
                  key={message.id}
                  avatar={message.avatar}
                  createdTime={message.created_at}
                  name={message.user}
                  message={message.message}
                />
            ))}
            </ul> : null}
      </div>
    </section>
  );
}

export default ChatList;