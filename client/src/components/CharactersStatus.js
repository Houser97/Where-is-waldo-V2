import React from 'react'
import '../styles/CharactersStatus.css'
import { CHARACTERS } from '../assets'
import { useParams } from 'react-router-dom'

const CharactersStatus = ({toggleSvg}) => {

    const { idGame } = useParams()

    const CHARACTERS_BOARD = CHARACTERS[idGame]

  return (
    <div className={`characters-status ${toggleSvg ? 'open-status':''}`}>
        {
            Object.keys(CHARACTERS_BOARD).map((character, i) => {
                return(
                    <div key={`character-status-${i}`} className='character-status'>
                        <img alt='character' className='character-status-image' src={CHARACTERS_BOARD[character].image}></img>
                        <div className='character-status-name'>{character}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CharactersStatus