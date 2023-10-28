import React from 'react'
import '../styles/CharactersStatus.css'
import { CHARACTERS } from '../assets'

const CharactersStatus = ({toggleSvg}) => {
  return (
    <div className={`characters-status ${toggleSvg ? 'open-status':''}`}>
        {
            Object.keys(CHARACTERS).map((character, i) => {
                return(
                    <div key={`character-status-${i}`} className='character-status'>
                        <img alt='character' className='character-status-image' src={CHARACTERS[character].image}></img>
                        <div className='character-status-name'>{CHARACTERS[character].name}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CharactersStatus