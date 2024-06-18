import { useState } from 'react';
// import Say from './Say'
import SayController from './SayController';
import SayViewer from './SayViewer';
import SayColor from './SayColor';
// import SayController from './SayController';
// import SayViewer from './SayViewer';

//say라는 사용지정의 컴포넌트 만들어서 분리  :say.jsx
//콜백함수를 따로 빼기

//SayViewer
//SayController
//SayColor

function App() {
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('black');
  // const SayMessageBye = () => {
  //   setMessage("안녕히 가세요!!");
  // }

  // const SayMessageHi = () => {
  //   setMessage("안녕하세요!");
  // }

  const messageHandler = (message) => {
    setMessage(message);
  }

  const colorHandler = (color) => {
    setColor(color);
  }

  return (
    <div>
        <SayController messageHandler={messageHandler}/>
        <SayViewer message={message} color={color}/>
        <SayColor colorHandler={colorHandler}/>
      {/* 1 */}
      {/* <Say msgHandler={messageHandler}/> */}
      {/* <button onClick={() => SayMessageHi()}>입장</button>
      <button onClick={() => SayMessageBye()}>퇴장</button>
      <Say message={message} /> */}
      {/* <>{message}</> */}
    </div>  
  );
}

export default App;
