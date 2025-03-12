import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function Task() {
  return (
    <h1>Main Quests</h1>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Task />
    </div>
  );
}

export default App;