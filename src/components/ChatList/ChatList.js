import React, { useEffect, useRef } from 'react';
import MessageContainer from '../../containers/MessageContainer';

//images
import avatar from './Message/images/avatar.png';

//styles
import s from './Message/styles/Message.module.scss';

export const ChatList = props => {
  const { messages } = props;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <section className="chat-list">
      <div className="content">
        {(messages) 
          ? <ul className="messages-list">
              {messages.map(message => (
                <MessageContainer
                  classWrap={(message.user === props.userName) 
                    ? `${s.wrap} ${s.myMessageWrap}` : s.wrap}
                  classMessage={(message.user === props.userName) 
                    ? `${s.message} ${s.myMessage}` : s.message}
                  classLikeWrap={(message.user === props.userName) 
                    ? "display-none" : s.messageLikeWrap}
                  classAvatar={(message.user === props.userName) 
                    ? "display-none" : s.avatar}
                  classNav={(message.user === props.userName) 
                    ? s.nav : "display-none"}
                  key={message.id}
                  id={message.id}
                  avatar={message.avatar 
                    ? message.avatar : avatar}
                  createdTime={message.created_at}
                  name={message.user}
                  message={message.message}
                />
            ))}
            </ul> : null}
            <div ref={messagesEndRef} />
      </div>
    </section>
  );
}

export default ChatList;