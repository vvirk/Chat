import React from 'react';

export const Message = props => {
  return (
    <li className={props.classWrap}>
      <div className={props.classMessage}>
        <div className="message-time">
          {props.createdTime}
        </div>
        <div className="message-inner">
          <div className="message-info">
            <div className={props.classAvatar}>
              <img src={props.avatar} alt="avatar" />
            </div>
            <div className="message-desc">
              <h2 className="message-title">{props.name}</h2>
              <div className="message-body">{props.message}</div>
            </div>
          </div>
          <div className={props.classLikeWrap}>
            <button className="message-like">&#10084;</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Message;