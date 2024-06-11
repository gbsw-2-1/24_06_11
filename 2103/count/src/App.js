import { useState } from 'react';
import Viwer from './Viewer';
import Controller from './Controller';
import './App.css';

export default function App() {
  //count라는 상태 만들기 및 값 초기화
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <section>
        {/* 자식컨포넌트에게 props 전달 */}
      <Viwer count = {count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

// export default App;
