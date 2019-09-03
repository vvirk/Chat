import React, { useState } from 'react';

//styles
import s from './styles/MessageInput.module.scss';

export const MessageInput = props => {
  const [message, setMessage] = useState("");
  const { addNewMessage } = props;
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <input 
          className={s.input}
          type="text" 
          onChange={e => setMessage(e.target.value)}
          onKeyUp={e => (e.keyCode === 13 && message)
            ? addNewMessage(message) && setMessage("") : null}
          value={message} 
          placeholder="Type something..."
        />
        <button 
          className={s.btn} 
          onClick={()=>(message) 
            ? addNewMessage(message) && setMessage("") : null}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;