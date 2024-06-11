import {useState} from 'react';
import Viewer from "./Viewer";
import Controller from './Controller';
import './App.css';

function App() {
  // count 상태 만들기, 초기화
  const [count, setCount] = useState(0)

  const handleSetCount = (value) => {
    setCount(count+value)
  }

  return (
    <div className="App"> 
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>

    </div>
 );
}

export default App;
