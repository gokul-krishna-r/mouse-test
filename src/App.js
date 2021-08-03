import './App.css';
import React,{useEffect, useState} from 'react';
import Mouse from './images/mouse.png';
import MouseRight from './images/mouse_right.png';
import MouseLeft from './images/mouse_left.png';
import MouseMiddle from './images/mouse_middle.png';



function App() {
  const [rightClicked,setRightClicked] = useState(false);
  const [leftClicked,setLeftClicked] = useState(false);
  const [middleClicked,setMiddleClicked] = useState(false);
  const [clicked,setClicked] = useState(false);


  const handleMouseClick = (e)=>{
    e.preventDefault();
    setClicked(true);
    if (typeof e === 'object') {
      switch (e.button) {
        case 0:
          console.log('Left button clicked.');
          setLeftClicked(true);
          break;
        case 1:
          console.log('Middle button clicked.');
          setMiddleClicked(true);
          break;
        case 2:
          console.log('Right button clicked.');
          setRightClicked(true);
          break;
        default:
          console.log('Error');
      }
    }
  };
  const handleMouseUp = (e)=>{
    e.preventDefault();
    setClicked(false);
    if (typeof e === 'object') {
      switch (e.button) {
        case 0:
          console.log('Left button clicked.');
          setLeftClicked(false);
          break;
        case 1:
          console.log('Middle button clicked.');
          setMiddleClicked(false);
          break;
        case 2:
          console.log('Right button clicked.');
          setRightClicked(false);
          break;
        default:
          console.log('Error');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleMouseClick);
    window.addEventListener('mouseup', handleMouseUp);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('mousedown', handleMouseClick);
      window.addEventListener('mouseup', handleMouseUp);

    };
  }, []); 

  return (
    <div className="container">
      
      {clicked? <div>
      {rightClicked?<img src={MouseRight}/>:[]} 
      {leftClicked?<img src={MouseLeft}/>:[]} 
      {middleClicked?<img src={MouseMiddle}/>:[]}
      </div>
      :<img src={Mouse}/>}
       </div>
  );
}



export default App;
