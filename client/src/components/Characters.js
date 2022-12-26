import React from 'react'
import '../styles/Characters.css'
import { CHARACTERS } from '../assets'

const Characters = () => {
  return (
    <div className='characters'>
    {
        CHARACTERS.map((character, i) => {
            return(
                <div key={i} className='photo-name'>
                    <img src={character.image} alt={character.name} className='first-photo character'></img>
                    <div className='name'>{character.name}</div>
                </div>
            )
        })
    }
    </div>
  )
}

export default Characters