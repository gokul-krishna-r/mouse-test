import './App.css';
import React,{useEffect, useState} from 'react';
import MouseSVG from './images/mouse.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';



function App() {
  const [rightClicked,setRightClicked] = useState(false);
  const [leftClicked,setLeftClicked] = useState(false);
  const [middleClicked,setMiddleClicked] = useState(false);
  const [forwardClicked,setForwardClicked] = useState(false);
  const [backwardClicked,setBackwardClicked] = useState(false);
  const [wheelUp,setWheelUp] = useState(false);
  const [wheelDown,setWheelDown] = useState(false);
  
 
  
  const handleMouseDown = (e)=>{
    e.preventDefault();
    if (typeof e === 'object') {
      switch (e.button) {
        case 0:{
          console.log('Left button clicked.');
          setLeftClicked(true);
          break;
        }
        case 1:{
          console.log('Middle button clicked.');
          setMiddleClicked(true);
          break;
        }
        case 2:{
          console.log('Right button clicked.');
          setRightClicked(true);
          break;
        }
        case 3:{
          console.log('Backward button clicked.');
          setBackwardClicked(true);
          break;
        }
        case 4:{
          console.log('Forward button clicked.');
          setForwardClicked(true);
          break;
        }
        default:{
          console.log("Error "+e);
        }
      }
    }
  };
  const handleMouseUp = (e)=>{
    e.preventDefault();
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
          setBackwardClicked(false);
          break;
        case 4:
          console.log('Forward button clicked.');
          setForwardClicked(false);
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
        setTimeout(() => { setWheelDown(false);}, 250);
        break;
      case -100:
        console.log("Up");
        setWheelUp(true);
        setTimeout(() => {setWheelUp(false);}, 250);
        break;
      default:
        console.log(e);
    }
   
  };

  
 
  useEffect((e) => {
    
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
  },); 
  
  
  return (
    <div  className="container">
    
     <SvgLoader path={MouseSVG}>
     {leftClicked?<SvgProxy selector="#left"  stroke="cyan" />:<SvgProxy selector="#left" stroke='#000'/>}
     {rightClicked?<SvgProxy selector="#right"  stroke="cyan" />:<SvgProxy selector="#right" stroke='#000'/>}
     {middleClicked?<SvgProxy selector="#scroll"  fill="cyan" />:<SvgProxy selector="#scroll" fill='#000'/>}
     {forwardClicked?<SvgProxy selector="#forward"  fill="cyan" />:<SvgProxy selector="#forward" fill='#000'/>}
     {backwardClicked?<SvgProxy selector="#backward"  fill="cyan" />:<SvgProxy selector="#backward" fill='#000'/>}
     {wheelUp?<SvgProxy selector="#wheelup"  stroke="cyan" />:<SvgProxy selector="#wheelup" stroke='#000'/>}
     {wheelDown?<SvgProxy selector="#wheeldown"  stroke="cyan" />:<SvgProxy selector="#wheeldown" stroke='#000'/>}
     </SvgLoader>
      
      </div>
  );
}

export default App;
