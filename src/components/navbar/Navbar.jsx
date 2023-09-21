import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import lawlady2 from '../../lawlady2.png'
import './navbar.css';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import runGame from '../game/runGame';
import Game from '../Game';
import { useNavigate } from 'react-router-dom';
import Egame from './game';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  

  // const navigate = useNavigate();


  // const [runGame, setRunGame] = useState(false);
  
  // const run_game =()=>
  // {
  //   //  location.toString="src/components/navbar/game.jsx";
  //    setRunGame(true) ;
  // }
  



  return (
    <div className="lmls__navbar">
      <div className="lmls__navbar-links">
        <div className="lmls__navbar-links_logo">
          <img src={lawlady2} />
        </div>

        <div className="lmls__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#lmls">What is Lawman's Legacy?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>

      <div className="lmls__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#lmls">What is Lawman's Legacy?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
