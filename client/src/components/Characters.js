import React, { useContext } from 'react'
import '../styles/Characters.css'
import { CHARACTERS } from '../assets'
import { gameContext } from '../App'

const Characters = () => {

    const startGame = useContext(gameContext).startGame;
    const setStartGame = useContext(gameContext).setStartGame;

  return (
    <div className={`characters-background ${startGame ? 'hide':''}`}>
        <div className='characters'>
            <div className='title'>Where are ...?</div>
            <div className='content'>
                <div className='description'>Find the following three characters in the shortest time possible to appear in the list of the fastest.</div>
                <div className='characters-grid'>
                    {
                        Object.keys(CHARACTERS).map((character, i) => {
                            return(
                                <div key={i} className='photo-name'>
                                    <img src={CHARACTERS[character].image} alt={CHARACTERS[character].name} className='first-photo character'></img>
                                    <div className='name'>{CHARACTERS[character].name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='start-game' onClick={() => setStartGame(true)}>Start</div>
            </div>
        </div>
    </div>
  )
}

export default Characters