import React, { useContext } from 'react'
import '../styles/Characters.css'
import { CHARACTERS } from '../assets'
import { gameContext } from '../App'
import { useParams } from 'react-router-dom'

const Characters = () => {

    const startGame = useContext(gameContext).startGame;
    const setStartGame = useContext(gameContext).setStartGame;

    const { idGame } = useParams();

    const CHARACTERS_BOARD = CHARACTERS[idGame]

  return (
    <div className={`characters-background ${startGame ? 'hide':''}`}>
        <div className='characters'>
            <div className='title'>Where are ...?</div>
            <div className='content'>
                <div className='description'>Find the following three characters in the shortest time possible to appear in the list of the fastest.</div>
                <div className='characters-grid'>
                    {
                        Object.keys(CHARACTERS_BOARD).map((character, i) => {
                            return(
                                <div key={i} className='photo-name'>
                                    <img src={CHARACTERS_BOARD[character].image} alt={CHARACTERS_BOARD[character].name} className='first-photo character'></img>
                                    <div className='name'>{character}</div>
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