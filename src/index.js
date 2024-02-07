import React from 'react';
import './index.css';
import Home from './ui/pages/home/Home';
import ReactDOM from 'react-dom/client';

export default function App () {
  return (
    <div className='App'>
      <Home />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);