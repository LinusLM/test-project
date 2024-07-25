import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const messageRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 100 && messageRef.current) {
        messageRef.current.innerText = 'Wow, you should touch some grass';
      }
      return newCount;
    });
  }

  function resetClick() {
    setCount(0);
    if (messageRef.current) {
      messageRef.current.innerText = '';
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <button onClick={resetClick}>Reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="countis100" ref={messageRef}></div>
    </>
  );
}

export default App;
