import React from 'react'
import '../styles/CharactersStatus.css'
import { CHARACTERS } from '../assets'

const CharactersStatus = ({toggleSvg}) => {
  return (
    <div className={`characters-status ${toggleSvg ? 'open-status':''}`}>
        {
            CHARACTERS.map((character, i) => {
                return(
                    <div key={`character-status-${i}`} className='character-status'>
                        <img className='character-status-image' src={character.image}></img>
                        <div className='character-status-name'>{character.name}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CharactersStatus