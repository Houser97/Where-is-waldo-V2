import React, { useRef, useState } from 'react'
import '../styles/Board.css'
import image from '../assets/Images/BackgroundWaldo.jpg';
import Scope from './Scope';

const Board = () => {

    const [coordsUser, setCoordsUser] = useState({x: 0, y: 0});

    const imgRef = useRef(null);
    const square = useRef(null);

    const charactersArray = useRef([]); //Referencia de elementos LI de Magic Div.

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
    
      function checkIfSelected(selectedX, selectedY, solutionX, solutionY, character){
          let componentX = Math.pow(Math.abs(selectedX-solutionX),2);
          let componentY = Math.pow(Math.abs(selectedY-solutionY),2)
          let distance = Math.round(Math.sqrt(componentX+componentY));
    
          if(distance < 5){
            console.log(`You hit ${character}`);
            return true
            /*removeCharacterFromList(character);
            setToggle("show");
            setMessage(`You have found ${character}!`);
            setNumberOfCharacters(number => number - 1);*/
          } else {
            console.log("Keep trying");
            return false
            /*setToggle("show-incorrect");
            setMessage(character);
            setMessage("Keep trying")*/
          }
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
    <Scope scopeRef={square} />
    </div>
  )
}

export default Board