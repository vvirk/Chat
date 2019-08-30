import React from 'react';

export const Message = (props) => {
  return (
    <li className="message-wrap">
      <div className="message">
        <div className="avatar">
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className="message-time">{props.createdTime}</div>
        <div className="name">{props.name}</div>
        <div className="message-text">{props.message}</div>
      </div>
    </li>
  );
}

export default Message;