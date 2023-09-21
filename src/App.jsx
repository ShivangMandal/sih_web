import {React, useState} from 'react';

import { Footer, Possibility, Features,  Header, WhatLMLS, } from './containers';
import { CTA, Navbar,  } from './components';

import Game from './components/Game';


import './App.css';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
// import { useState } from 'react';






const App = () => {

const [runGame, setRunGame] = useState(0);
  
const run_game =()=>
{
  //  location.toString="src/components/navbar/game.jsx";
   setRunGame(1) ;
}


return(




  
 

  <div className="App">
    <div className="gradient__bg">

     <Navbar />
     <Header />
      </div>
      <WhatLMLS />

     <div className='playButton'>
      <button onClick={run_game}>Play now </button>
      
        <div className= "game">

        {runGame && <Game />} 
        </div>
{/*       
      <Routes>
        <Route path = "src/comonents/navbar/game" element ={<Egame/>}/>

      </Routes> */}
     </div>

      <Features />
      <Possibility />
      <CTA />
      <Footer />
    

  </div>
);
    }

export default App;
