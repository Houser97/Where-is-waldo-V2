import React, { useContext, useState } from 'react'
import { CHARACTERS } from '../assets'
import { gameContext } from '../App';
import '../styles/CharactersList.css'

const CharactersList = ({ coordsUser, scopeRef, CharacterListRef, SelectedBoard }) => {

  const CHARACTERS_BOARD = CHARACTERS[SelectedBoard]

  const [charactersKey, setCharactersKey] = useState(Object.keys(CHARACTERS_BOARD))

  const setCharacterHit = useContext(gameContext).setCharacterHit
  const setToggleMessage = useContext(gameContext).setToggleMessage


  const removeCharacterFromList = (selectedCharacter) => {
    setCharactersKey((prev) => prev.filter(character => character !== selectedCharacter))
  }

  const checkIfSelected = (solutionX, solutionY) => {
    let componentX = Math.pow(Math.abs(coordsUser.x - solutionX), 2);
    let componentY = Math.pow(Math.abs(coordsUser.y - solutionY), 2)
    let distance = Math.round(Math.sqrt(componentX + componentY));

    if (distance < 5) {
      return true
    }
    return false
  }

  const getCharacter = (e) => {
    const CHARACTER = e.currentTarget.dataset.name;
    fetch(`/api/coordinates/${CHARACTER}`)
      .then(response => response.json())
      .then(data => {
        if (checkIfSelected(data.x, data.y)) {
          removeCharacterFromList(CHARACTER);
          setCharacterHit(CHARACTER);
        } else {
          setCharacterHit(false); // Se limpia para que Message renderice 'Keep Trying'.
          setToggleMessage(true); // Renderiza mensaje con 'Keep Trying'
        }
        const magicDiv = scopeRef.current
        magicDiv.classList.remove('show-characters')
        CharacterListRef.current.classList.remove('show-characters')
      })

  }

  return (
    <ul className='list-characters' ref={CharacterListRef}>
      {
        charactersKey.map((character, i) => {
          return (
            <li key={`li-${character}`}
              data-name={character}
              className={`li-element ${i === 0 ? 'first-li-element' : 'li-element-borders'}`}
              onClick={getCharacter}><img src={CHARACTERS_BOARD[character].image} className='img__character-item'></img><span>{character}</span></li>
          )
        })
      }
    </ul>
  )
}

export default CharactersList