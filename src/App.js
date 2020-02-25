//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from 'react-dom';

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const [timer, setTimer] = useState('00:00');
  const [readyForExtraPoint, setReadyForExtraPoint] = useState(false);

  const addScore = (score, homeTeam) => {
    if (score >= 6) {
      setReadyForExtraPoint(true);
    } else {
      setReadyForExtraPoint(false);
    }

    if (homeTeam) {
      setScoreHome(scoreHome + score);
    } else {
      setScoreAway(scoreAway + score);
    }
  };

  let extraPointButton1 = '';
  let extraPointButton2 = '';
  let extraPointButton3 = '';
  let extraPointButton4 = '';

  if (readyForExtraPoint) {
    extraPointButton1 = <button className="homeButtons__touchdown" onClick={()=>addScore(1, true)}>Home Extra Point</button>;
    extraPointButton2 = <button className="homeButtons__touchdown" onClick={()=>addScore(2, true)}>Home Conversion</button>;
    extraPointButton3 = <button className="awayButtons__touchdown" onClick={()=>addScore(1, false)}>Away Extra Point</button>;
    extraPointButton4 = <button className="awayButtons__touchdown" onClick={()=>addScore(2, false)}>Away Conversion</button>;
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ scoreHome }</div>
          </div>
          <div className="timer">{ timer }</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ scoreAway }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>addScore(6, true)}>Home Touchdown</button>
          { extraPointButton1 }
          { extraPointButton2 }
          <button className="homeButtons__fieldGoal" onClick={()=>addScore(3, true)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>addScore(6, false)}>Away Touchdown</button>
          { extraPointButton3 }
          { extraPointButton4 }
          <button className="awayButtons__fieldGoal" onClick={()=>addScore(3, false)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
