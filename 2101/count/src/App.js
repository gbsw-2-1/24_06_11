import {useState} from 'react'
import './App.css';
import Viewer from './Viewer';
import Controller from './Controller';
export default function App() {
  const [count, setcount] =useState(0);
  const handleSetCount= (value) =>{
    setcount(count+value);
  }
  return (
    <div className='App'>
    
      <section><Viewer count={count} /> </section>
      
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
      
      
    </div>
  );
}


