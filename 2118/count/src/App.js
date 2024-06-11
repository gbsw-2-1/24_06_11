import { useState } from 'react';
import './App.css';
import Viewer from './Viewer';
import Controller from './Controller';

function App() {
  // count 라는 상태 만들기 및 값 초기화
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value)
  }

  return (
    <div className="App">
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
