import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav"
import Routes from "./Routes"
import './tugas11/HargaBuah.css'
import UserInfo from './UserInfo';
import HargaBuah from './tugas11/HargaBuah';
import Timer from './tugas12/Timer';
import Clock from './tugas12/Clock';
import List from './tugas13/List';
import ListInFunc from './tugas14/ListInFunc';
import Buah from './tugas15/BuahIndex';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes/>
    </Router>
  )
}


// function App() {
//   return (
//     <div className="App" style={{width: 'fit-content', margin: 'auto'}}>
//       {/* Tugas Hari Ke-1 */}
//       {/* <HargaBuah /> */}
      
//       {/* Tugas Hari Ke-2 */}
//       <div style={{display: "flex", justifyContent: "space-between"}}>
//       <Clock />
//       <Timer />
//       </div>

//       {/*Tugas Hari Ke-3 */}
//       {/* <List /> */}

//       {/* Tugas Hari Ke-4 */}
//       {/* <ListInFunc /> */}

//       {/* Tugas Hari Ke-5 */}
//       <Buah />

      
//     </div>
//   );
// }

export default App;
