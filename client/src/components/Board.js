import React, { useRef, useState } from 'react'
import '../styles/Board.css'
import image from '../assets/Images/BackgroundWaldo.jpg';
import Scope from './Scope';

const Board = () => {

  const [coordsUser, setCoordsUser] = useState({});

  const imgRef = useRef(null);
  const square = useRef(null);

  const centerMagicDiv = (x,y) =>{
      const width = square.current.offsetWidth/2;
      const height = square.current.offsetHeight/2;
  
      const magicDiv = document.querySelector(".magic-div");
  
      magicDiv.style.top = `${y-height}px`;
      magicDiv.style.left = `${x-width}px`
    }
  
  const setRelativeCoordinates = (x,y) => {
    const widthImage = imgRef.current.offsetWidth;
    const heightImage = imgRef.current.offsetHeight;

    let relX = Math.round((x/widthImage)*100);
    let relY = Math.round(((y)/heightImage)*100);

    return [relX, relY];
  }

  const setMagicDiv = (e) => {
    const magicDiv = square.current;
    magicDiv.style.display = "flex";

    let x = e.pageX;;
    let y = e.pageY;
    
    centerMagicDiv(x,y);
    [x, y] = setRelativeCoordinates(x,y);

    setCoordsUser({x, y});
  } 

  return (
    <div className='image-container'>
        <img src={image} alt='cartoon-network' className='img-project' ref={imgRef} onClick = {setMagicDiv}></img>
        <div className='credits'>Photo by: <a href='https://www.reddit.com/r/adventuretime/comments/bvr37b/the_land_of_ooo_adventure_time_by_tom_preston/'>Tom Preston</a></div>
        <Scope scopeRef={square} coordsUser = {coordsUser} />
    </div>
  )
}

export default Board