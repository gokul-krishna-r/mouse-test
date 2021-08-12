import './App.css';
import React,{useEffect, useState} from 'react';
import Mouse from './images/mouse.png';
import MouseRight from './images/mouse_right.png';
import MouseLeft from './images/mouse_left.png';
import MouseMiddle from './images/mouse_middle.png';
import MouseUp from './images/mouse_wheel_up.png';
import MouseDown from './images/mouse_wheel_down.png';



function App() {
  const [rightClicked,setRightClicked] = useState(false);
  const [leftClicked,setLeftClicked] = useState(false);
  const [middleClicked,setMiddleClicked] = useState(false);
  const [clicked,setClicked] = useState(true);
  const [wheelUp,setWheelUp] = useState(false);
  const [wheelDown,setWheelDown] = useState(false);

  
  const handleMouseDown = (e)=>{
    e.preventDefault();
    setClicked(false);
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
        case 3:
          console.log('Backward button clicked.');
          break;
        case 4:
          console.log('Forward button clicked.');
          break;
        default:
          console.log("Error "+e);
      }
    }
  };
  const handleMouseUp = (e)=>{
    e.preventDefault();
    setClicked(true);
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
          case 3:
            console.log('Backward button clicked.');
            break;
          case 4:
            console.log('Forward button clicked.');
            break;
        default:
          console.log("Error "+e);
      }
    }
  };

  const handleMouseWheel = (e) =>{
    console.log(e.deltaY);
    switch(e.deltaY){
      case 100:
        setWheelDown(true);
        console.log("Down");
        setClicked(false);
        setTimeout(() => { setWheelDown(false); setClicked(true);}, 250);
        break;
      case -100:
        console.log("Up");
        setWheelUp(true);
        setClicked(false);
        setTimeout(() => {setWheelUp(false);setClicked(true);}, 250);
        break;
      default:
        console.log(e);
    }
   
  }
  
  
  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener("wheel",handleMouseWheel);
    window.addEventListener('contextmenu', function (e) { e.preventDefault() });

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener("wheel",handleMouseWheel);
    };
  }, []); 

  return (
    <div  className="container">
      
      {wheelUp?<img src={MouseUp} alt="mouse middle clicked"/>:[]}
      {wheelDown?<img src={MouseDown} alt="mouse middle clicked"/>:[]}
     

      
      {rightClicked?<img src={MouseRight} alt="mouse right clicked"/>:[]} 
      {leftClicked?<img src={MouseLeft} alt="mouse left clicked"/>:[]} 
      {middleClicked?<img src={MouseMiddle} alt="mouse middle clicked"/>:[]}
     {clicked?<img src={Mouse} alt="Mouse"/>:[]} 
      
      
      </div>
  );
}



export default App;
