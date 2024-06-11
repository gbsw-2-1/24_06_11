import { useState } from 'react';
import Viewer from './Viewer';
import Controller from './Controller';
import './App.css';

function App() {
  // count라는 상태 만들기 및 값 초기화
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <section>
        {/* 자식컴포넌트에게
         props 전달*/}
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
