import React from 'react'
import '../styles/Characters.css'
import { CHARACTERS } from '../assets'

const Characters = () => {
  return (
    <div className='characters-background'>
        <div className='characters'>
            <div className='title'>Where are ...?</div>
            <div className='content'>
                <div className='description'>Find the following three characters in the shortest time possible to appear in the list of the fastest.</div>
                <div className='characters-grid'>
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
                <div className='start-game'>Start</div>
            </div>
        </div>
    </div>
  )
}

export default Characters