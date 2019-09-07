import React from 'react';

//styles
import s from './styles/MessageInput.module.scss';

export const MessageInput = props => {
  
  const { 
    addMessage,
    message,
    sendMessage,
    editId,
    saveEditedMessage,
    editIndex,
  } = props;
  console.log(editId);
  console.log(editIndex);
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <input 
          className={s.input}
          type="text" 
          onChange={e => addMessage(e.target.value)}
          onKeyUp={e => (e.keyCode === 13 && editId && message) 
            ? saveEditedMessage(message, editIndex) 
            : (e.keyCode === 13 && message) ? sendMessage(message): null}
          value={message} 
          placeholder="Type something..."
        />
        <button 
          className={s.btn} 
          onClick={()=>(message && editId) 
            ? saveEditedMessage(message, editIndex)
            : (message) ? sendMessage(message) : null}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;