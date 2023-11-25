import React, { useContext } from 'react'
import '../styles/Characters.css'
import { CHARACTERS } from '../assets'
import { gameContext } from '../App'
import { useImageIsLoaded } from './hooks/useImageIsLoaded'
import Loader from './Loader'

const Characters = ({SelectedBoard}) => {

    const startGame = useContext(gameContext).startGame;
    const setStartGame = useContext(gameContext).setStartGame;

    const CHARACTERS_BOARD = CHARACTERS[SelectedBoard]

    const [ isImageLoaded1, handleImageLoad1 ] = useImageIsLoaded();
    const [ isImageLoaded2, handleImageLoad2 ] = useImageIsLoaded();
    const [ isImageLoaded3, handleImageLoad3 ] = useImageIsLoaded();

    const handleImageLoadArray = [
        {
            handleImageLoad: handleImageLoad1,
            isImageLoaded: isImageLoaded1
        }, 
        {
            handleImageLoad: handleImageLoad2,
            isImageLoaded: isImageLoaded2
        }, 
        {
            handleImageLoad: handleImageLoad3,
            isImageLoaded: isImageLoaded3
        }];
    


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
                                <div key={character} className='photo-name'>
                                    {!isImageLoaded1 && <Loader isWhiteBg = {true} />}
                                    <img src={CHARACTERS_BOARD[character].image} alt={CHARACTERS_BOARD[character].name} className={`${handleImageLoadArray[i]['isImageLoaded'] ? 'first-photo character' : 'hide-image'}`} onLoad={() => handleImageLoadArray[i]['handleImageLoad']()}></img>
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