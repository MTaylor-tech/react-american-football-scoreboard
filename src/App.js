//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from 'react-dom';

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const [timerMin, setTimerMin] = useState(15);
  const [timerSec, setTimerSec] = useState(0);
  const [readyForExtraPoint, setReadyForExtraPoint] = useState(false);
  let timerInterval;

  const tick = () => {
    if ((timerMin <= 0) && (timerSec <= 0)) {
      stopTimer();
    } else {
      if (timerSec === 0) {
        setTimerSec(59);
        setTimerMin(timerMin - 1);
      } else {
        setTimerSec(timerSec - 1);
      }
    }
  };

  const resetTimer = () => { stopTimer(); setTimerMin(15); setTimerSec(0)};
  const startTimer = () => { App.timerInterval = setInterval(()=>tick(),1000)};
  const stopTimer = () => { clearInterval(App.timerInterval)};

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
          <div className="timer">{ timerMin.pad() }:{ timerSec.pad() }</div>
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
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={()=>startTimer()}>Start Timer</button>
          <button className="homeButtons__touchdown" onClick={()=>stopTimer()}>Stop Timer</button>
          <button className="homeButtons__touchdown" onClick={()=>resetTimer()}>Reset Timer</button>
        </div>
      </section>
    </div>
  );
}

export default App;
