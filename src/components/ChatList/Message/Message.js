import React from 'react';

//styles
import s from './styles/Message.module.scss';

export const Message = props => {
  const { toggleLike } = props;
  const { likeMessages } = props;

  return (
    <li className={props.classWrap}>
      <div className={props.classMessage}>
        <div className={s.time}>
          {props.createdTime}
        </div>
        <div className={s.inner}>
          <div className={s.info}>
            <div className={props.classAvatar}>
              <img src={props.avatar} alt="avatar" />
            </div>
            <div className={s.desc}>
              <h2 className={s.title}>{props.name}</h2>
              <div className={s.body}>{props.message}</div>
            </div>
          </div>
          <div className={props.classLikeWrap}>
            <button 
              className={(likeMessages.includes(props.id)) 
                ? `${s.messageLike} ${s.like}` : s.messageLike }
              onClick={(e)=> toggleLike(e.target.id)}
              id={props.id}
            >
              &#9829;
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Message;