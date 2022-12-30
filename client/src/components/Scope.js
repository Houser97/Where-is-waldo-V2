import React, { useContext, useState } from 'react'
import '../styles/Scope.css'
import { CHARACTERS } from '../assets';
import { gameContext } from '../App';

const Scope = ({scopeRef, coordsUser}) => {

  const setCharacterHit = useContext(gameContext).setCharacterHit
  const setToggleMessage = useContext(gameContext).setToggleMessage

    const removeCharacterFromList = (liElement) => {
        liElement.target.style.display = 'none'
    }

    const checkIfSelected = (solutionX, solutionY) => {
      console.log(coordsUser)
      let componentX = Math.pow(Math.abs(coordsUser.x-solutionX),2);
      let componentY = Math.pow(Math.abs(coordsUser.y-solutionY),2)
      let distance = Math.round(Math.sqrt(componentX+componentY));

      if(distance < 5){
        return true
      } 
      return false  
    }

    const getCharacter = (e) => {
        const CHARACTER = e.target.textContent;
        fetch(`http://localhost:5000/api/get_coordinates/${CHARACTER}`)
        .then(response => response.json())
        .then(data => {
          if(checkIfSelected(data.x, data.y)){
            removeCharacterFromList(e);
            setCharacterHit(CHARACTER);
          } else {
            setCharacterHit(false);
            setToggleMessage(true);
          }
        })

      }

  return (
    <div className='magic-div' ref={scopeRef}>
        <div className='x-design-1 x-design'></div>
        <div className='x-design-2 x-design'></div>
        <div className='container-list'>
            <ul className='list-characters'>
                {
                  CHARACTERS.map((character, i) => {
                      return(
                      <li key={`li-${i}`} 
                      data-id = {i}
                      className={`li-element ${i < CHARACTERS.length -1 ? '':'last-li-element'}`} 
                      onClick = {getCharacter}>{character.name}</li>
                      )
                  })
                }
            </ul>
        </div>
    </div>
  )
}

export default Scope