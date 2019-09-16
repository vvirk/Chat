import React from 'react';

//styles
import s from './styles/MessageInput.module.scss';

export const MessageInput = ({ 
  addMessage,
  message,
  sendMessage,
  editId,
  saveEditedMessage,
  editIndex,
}) => {
  const handleKeyUp = e => (
    (e.keyCode === 13 && editId && message) 
      ? saveEditedMessage(message, editIndex) 
      : (e.keyCode === 13 && message) ? sendMessage(message): null
  );

  const handleClick = () => (
    (message && editId) 
      ? saveEditedMessage(message, editIndex)
      : (message) ? sendMessage(message) : null
  )
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <input 
          className={s.input}
          type="text" 
          onChange={e => addMessage(e.target.value)}
          onKeyUp={handleKeyUp}
          value={message} 
          placeholder="Type something..."
        />
        <button 
          className={s.btn} 
          onClick={handleClick}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;