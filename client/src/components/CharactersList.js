import React, { useContext } from 'react'
import { CHARACTERS } from '../assets'
import { gameContext } from '../App';
import '../styles/CharactersList.css'

const CharactersList = ({coordsUser, scopeRef, CharacterListRef}) => {
    const setCharacterHit = useContext(gameContext).setCharacterHit
    const setToggleMessage = useContext(gameContext).setToggleMessage
  

    const removeCharacterFromList = (liElement) => {
        liElement.style.display = 'none'
    }

    const checkIfSelected = (solutionX, solutionY) => {
      let componentX = Math.pow(Math.abs(coordsUser.x-solutionX),2);
      let componentY = Math.pow(Math.abs(coordsUser.y-solutionY),2)
      let distance = Math.round(Math.sqrt(componentX+componentY));

      if(distance < 5){
        return true
      } 
      return false  
    }

    const getCharacter = (e) => {
        const CHARACTER = e.currentTarget.dataset.name;
        const LI_ELEMENT = e.currentTarget
        fetch(`/api/get_coordinates/${CHARACTER}`)
        .then(response => response.json())
        .then(data => {
          if(checkIfSelected(data.x, data.y)){
            removeCharacterFromList(LI_ELEMENT);
            setCharacterHit(CHARACTER);
          } else {
            setCharacterHit(false); // Se limpia para que Message renderice 'Keep Trying'.
            setToggleMessage(true); // Renderiza mensaje con 'Keep Trying'
          }
          const magicDiv = scopeRef.current
          magicDiv.style.display = 'none'
        })

      }

  return (
    <ul className='list-characters' ref={CharacterListRef}>
        {
        Object.keys(CHARACTERS).map((character, i) => {
            return(
            <li key={`li-${character}`} 
            data-name = {character}
            className={`li-element ${i < Object.keys(CHARACTERS).length -1 ? '':'last-li-element'}`} 
            onClick = {getCharacter}><img src={CHARACTERS[character].image} className='img__character-item'></img><span>{character}</span></li>
            )
        })
        }
    </ul>
  )
}

export default CharactersList