import React, {useState} from "react";
import "./App.css";

const BottomRow = (props) => {
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const yardsForFirstDown = props['yardsForFirstDown'];
  const ballPosition = props['ballPosition'];
  //const [yardsForFirstDown,ballPosition] = props;
  //const [ballPosition, setBallPosition] = useState(0);
  //const [yardsForFirstDown, setYardsForFirstDown] = useState(10);

  //const getYardsForFirstDown = () => { return yardsForFirstDown; };

  const nextDown = () => setDown(down >= 4 ? 1 : down + 1);
  const nextQuarter = () => setQuarter(quarter >= 4 ? 1 : quarter + 1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down <span onClick={()=>nextDown()}>+</span></h3>
        <div className="down__value">{ down }</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsForFirstDown}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballPosition}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter <span onClick={()=>nextQuarter()}>+</span></h3>
        <div className="quarter__value">{ quarter }</div>
      </div>
    </div>
  );
};

export default BottomRow;
