import React from 'react';
import './App.css';
import './tugas11/HargaBuah.css'
import UserInfo from './UserInfo';
import HargaBuah from './tugas11/HargaBuah';
import Timer from './tugas12/Timer';
import Clock from './tugas12/Clock'

function App() {
  return (
    <div className="App" style={{width: 'fit-content', margin: 'auto'}}>
      {/* Tugas Hari Ke-1 */}
      <HargaBuah />
      {/*Tugas Hari Ke-2 */}
      <div style={{display: "flex", justifyContent: "space-between"}}>
      <Clock />
      <Timer />
      </div>
    </div>
  );
}

export default App;
