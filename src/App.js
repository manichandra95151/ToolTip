
import './App.css';
import { useState } from 'react';
import Tooltip from './components/Tooltip/Tooltip';


function App() {
  //state for position of the tooltip
  const [position, setPosition] = useState('top');

  //fucntion to change the position value using the ratio buttons
  function changePosition(event) {
    setPosition(event.target.value);
  }
    
  return (
    <div className="App">
      <Tooltip position={position}>
        hover on me
      </Tooltip>
      <div className="options">
        <input type='radio' name="position" value='top' onChange={changePosition} checked={position==='top'}/><label>Top</label> <br />
        <input type='radio' name="position" value='bottom' onChange={changePosition} checked={position==='bottom'}/><label>Bottom</label> <br />
        <input type='radio' name="position" value='left' onChange={changePosition} checked={position==='left'}/><label>Left</label> <br />
        <input type='radio' name="position" value='right' onChange={changePosition} checked={position==='right'}/><label>Right</label> <br />
      </div>
    </div>
  );
}

export default App;
