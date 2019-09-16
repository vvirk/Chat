import React from 'react';

//styles
import s from './styles/Message.module.scss';

export const Message = ({ 
  toggleLike, 
  likeMessages, 
  deleteMessage,
  changeMessage,
  classWrap,
  classMessage,
  createdTime,
  classAvatar,
  avatar,
  name,
  message,
  classLikeWrap,
  id,
  classNav,
}) => (
  <li className={classWrap}>
    <div className={classMessage}>
      <div className={s.time}>
        {createdTime}
      </div>
      <div className={s.inner}>
        <div className={s.info}>
          <div className={classAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={s.desc}>
            <h2 className={s.title}>{name}</h2>
            <div className={s.body}>{message}</div>
          </div>
        </div>
        <div className={classLikeWrap}>
          <div 
            className={(likeMessages.includes(id)) 
              ? `${s.messageLike} ${s.like}` : s.messageLike }
            onClick={(e)=> toggleLike(e.target.id)}
            id={id}
          >
            &#9829;
          </div>
        </div>
        <nav className={classNav}>
          <div 
           className={s.editBtn}
           id={id}
           title="edit message"
           onClick={(e)=> changeMessage(e.target.id)}
          >
            edit
          </div>
          <div 
            id={id}
            onClick={(e)=>deleteMessage(e.target.id)}
            className={s.deleteBtn}
            title="delete message"
          >
            &#10799;
          </div>
        </nav>
      </div>
    </div>
  </li>
);

export default Message;