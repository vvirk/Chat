import React, { useState } from 'react';

export const MessageInput = props => {
  const [message, setMessage] = useState("");
  const { addNewMessage } = props;
  return (
    <div className="message-input-wrap">
      <div className="message-input-content">
        <input 
          className="message-input"
          type="text" 
          onChange={e => setMessage(e.target.value)}
          onKeyUp={e => (e.keyCode === 13 && message)
            ? addNewMessage(message) && setMessage("") : null}
          value={message} 
          placeholder="Type something..."
        />
        <button 
          className="message-input-btn" 
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