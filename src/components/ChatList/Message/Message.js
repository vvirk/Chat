import React from 'react';

export const Message = (props) => {
  return (
    <li className={props.classWrap}>
      <div className={props.classMessage}>
        <div className="message-time">
          {props.createdTime}
        </div>
        <div className="message-inner">
          <div className="avatar">
            <img src={props.avatar} alt="avatar" />
          </div>
          <div className="message-desc">
            <div className="user-name">{props.name}</div>
            <div className="message-body">{props.message}</div>
          </div>
          <div className="message-like-wrap">
            <button className="message-like">&#10084;</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Message;