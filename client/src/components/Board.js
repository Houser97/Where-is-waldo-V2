import React, { useRef, useState } from 'react'
import '../styles/Board.css'
import image from '../assets/Images/BackgroundWaldo.jpg';
import Scope from './Scope';
import CharactersList from './CharactersList';
import useWindowSize from '../hooks/windowSizeHook';

const Board = () => {

  const [coordsUser, setCoordsUser] = useState({});

  const imgRef = useRef(null);
  const square = useRef(null);
  const charactersListRef = useRef(null);

  const windowSize = useWindowSize(); 

  const centerElement = (x,y, elementRef) =>{
      const widthElement = elementRef.offsetWidth/2;
      const heightElement = elementRef.offsetHeight/2;

      elementRef.style.top = `${y-heightElement}px`
      elementRef.style.left = `${x-widthElement}px`
  }

  const PlaceElement = (x,y, elementRef) =>{

    const OFFSET_X_CHARACTER_LIST = windowSize.width > 500 ? 40 : 8;
    const OFFSET_Y_CHARACTER_LIST = windowSize.width > 500 ? 0 : 8;

    const widthImage = imgRef.current.offsetWidth;
    const heightImage = imgRef.current.offsetHeight;

    const widthElement = elementRef.offsetWidth;
    const heightElement = elementRef.offsetHeight;

    const overflowInX = OverflowsInX(widthImage, widthElement,x, OFFSET_X_CHARACTER_LIST)
    const overflowInY = OverflowsInY(heightImage,heightElement,y, OFFSET_Y_CHARACTER_LIST)

    elementRef.style.top = overflowInY ? `${y-heightElement-OFFSET_Y_CHARACTER_LIST-30}px`:`${y+OFFSET_Y_CHARACTER_LIST }px`
    elementRef.style.left = overflowInX ? `${x-OFFSET_X_CHARACTER_LIST-widthElement}px`:`${x+OFFSET_X_CHARACTER_LIST }px`
}

const OverflowsInX = (containerWidth, elementWidth, x, offsetX = 0) => {
  return x + offsetX + elementWidth > containerWidth
}

const OverflowsInY = (containerHeight, elementHeight, y, offsetY = 0) => {
  return y + offsetY + elementHeight > containerHeight
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
    const CharactersListRef = charactersListRef.current
    
    magicDiv.style.display = "flex";
    CharactersListRef.style.display = "flex";

    let x = e.pageX;;
    let y = e.pageY;

    
    centerElement(x,y, magicDiv);
    PlaceElement(x,y, CharactersListRef);
    [x, y] = setRelativeCoordinates(x,y);

    setCoordsUser({x, y});
  } 

  return (
    <div className='image-container'>
        <img src={image} alt='cartoon-network' className='img-project' ref={imgRef} onClick = {setMagicDiv}></img>
        <div className='credits'>Photo by: <a href='https://www.artstation.com/chekavo'>Egor Klyuchnyk</a></div>
        <CharactersList CharacterListRef = {charactersListRef} scopeRef={square} coordsUser = {coordsUser} />
        <Scope scopeRef={square} />
    </div>
  )
}

export default Board