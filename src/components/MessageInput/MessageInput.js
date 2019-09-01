import React, { useState } from 'react';

export const MessageInput = (props) => {
  const [message, setMessage] = useState("");
  return (
    <div className="message-input-wrap">
      <div className="message-input-content">
        <input 
          className="message-input"
          type="text" 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button 
          className="message-input-btn" 
          onClick={()=>props.addNewMessage(message)}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;