import React, {useState} from 'react';
import './App.css';
 
const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  return (<button onClick={():void => {
    setCount(count + 1)
  }} >Count: {count}</button>);
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
