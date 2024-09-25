import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(1);
  const updateCount = () => setCount(count + multi);
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMulti(multi * 2);
      setCount(count-10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMulti(multi * 5);
      setCount(count-100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMulti(multi * 10);
      setCount(count-1000);
    }
  }

  return (
    <div className="App">        
      <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>          
          <img className="samosa" src='https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-samosa-halal-food-png-image_9998990.png' onClick={updateCount}>
          </img>
      </div>
      <div className="container">
        <div className="upgrade">
        <h3>Double Stuffed 🕺</h3>
        <p>2x per click</p>
        <button onClick={buyDoubleStuffed}>10 samosas</button>        </div>
        <div className="upgrade">
        <h3>Party Pack 🎉</h3>
        <p>5x per click</p>
        <button onClick={buyPartyPack}>100 samosas</button>        </div>
        <div className="upgrade">
        <h3>Full Feast 👨‍🍳</h3>
        <p>10x per click</p>
        <button onClick={buyFullFeast}>1000 samosas</button>        </div>
      </div>
    </div>
  )
}

export default App
