import React, { useContext, useState } from 'react'
import '../styles/Scope.css'
import { CHARACTERS } from '../assets';
import { gameContext } from '../App';

const Scope = ({scopeRef}) => {

    const setToggleMessage = useContext(gameContext).setToggleMessage;
    const setMessage = useContext(gameContext).setMessage;

    const removeCharacterFromList = (liElement) => {
        liElement.target.style.display = 'none'
    }

    const getValueLi = (e) => {
        const CHARACTER = e.target.textContent;
        fetch(`http://localhost:5000/api/get_coordinates/${CHARACTER}`)
        .then(response => response.json())
        .then(data => {
          if(/*checkIfSelected(coordsUser.x, coordsUser.y, data.x, data.y, CHARACTER)*/true){
            removeCharacterFromList(e)
            setToggleMessage(true);
            setMessage(`You have found ${CHARACTER}!`);
            /*
            removeCharacterFromList(e)
            setToggle("show");
            setMessage(`You have found ${CHARACTER}!`);
            setNumberOfCharacters(number => number - 1);*/
          } else {
            /*setToggle("show-incorrect");
            setMessage(CHARACTER);
            setMessage("Keep trying")*/
          }
          const magicDiv = scopeRef.current;
          magicDiv.style.display = "none";
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
                    onClick = {getValueLi}>{character.name}</li>
                    )
                })
                }
            </ul>
        </div>
    </div>
  )
}

export default Scope