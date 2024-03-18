import React, { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { sender: 'user', message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <div  className='d-flex justify-content-center align-items-center' style={{position:"absolute" , top:"31rem"}}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ marginRight: '10px' , width: '100%' , paddingRight:"30rem"}} 
        />
        <button onClick={handleSendMessage} className='btn btn-primary btn-md' style={{padding:"0.5rem" , marginBottom:"1rem"}}>
  Send
</button>
      </div>
    </div>
  );
};

export default ChatInput;
