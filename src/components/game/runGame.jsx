import React from "react";


const runGame = ()=>{

  return(

      <div className="lmls__navbar-sign">

 
        <button  onClick={run_game}>Play Now</button> 
        <div>
         {runGame && <Game />}

        </div>
      </div>
  );

}

export default runGame;