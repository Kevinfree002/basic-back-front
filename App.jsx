import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend
    fetch('http://localhost:3000/') // Assuming backend runs on localhost:3000
      .then(response => response.json())
      .then(data => setMessage(data.msg))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
      <div>{message}</div> {/* Display the message from backend */}
    </>
  );
}

export default App;