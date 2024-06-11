// src/App.js
import React, { useState } from 'react';
import './App.css';
import Hello from './Hello';

function App() {
  const [message, setMessage] = useState('');

  const handleEntrance = () => {
    setMessage('안녕하세요');
  };

  const handleExit = () => {
    setMessage('안녕히가세요');
  };

  return (
    <div>
      <Hello message={message} />
      <button onClick={handleEntrance}>입장</button>
      <button onClick={handleExit}>퇴장</button>
    </div>
  );
}

export default App;