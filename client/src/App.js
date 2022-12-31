import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import Message from './components/Message';
import Form from './components/Form';
import Board from './components/Board';
import Ladderboard from './components/Ladderboard';

export const gameContext = createContext();
export const userContext = createContext();

function App() {

  /*const OFFSET_Y = 140; // Corresponde a la altura del Header*/

  //Estados de Ladderboard
  const [playersArray, setPlayersArray] = useState([]);
  const [toggleLadderboard, setToggleLadderboard] = useState(false);

  //Estados de Message
  const [toggleMessage, setToggleMessage] = useState(false);

  //Estados de flujo de juego
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfCharacters, setNumberOfCharacters] = useState(3);

  //Estados de SCOPE
  const [characterHit, setCharacterHit] = useState(null); // Estado que cambia en SCOPE y pasa nombre de personaje a Message.

  const [finalTimeUser, setFinalTimeUser] = useState(0);

  const[startGame, setStartGame] = useState(false); //Ayudará a iniciar COUNTER al presionar START en CHARACTERS

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setToggleMessage(false);
      clearTimeout(intervalId);
    }, 2000);

    return () => {
      clearTimeout(intervalId);
    }
  }, [toggleMessage])

  useEffect(() => {
    if(numberOfCharacters <= 0){
      setIsGameOver(true);
    }
  }, [numberOfCharacters])

  useEffect(() => {
    // Hace aparecer Message solo cuando se halla un personaje.
    if(characterHit){
      setToggleMessage(true);
      setNumberOfCharacters(number => number - 1);
    } 
  }, [characterHit])

  const getTime = (seconds) => {
      setFinalTimeUser(previousTime => previousTime + seconds);
  }

  const gameProvider = {isGameOver, getTime, setStartGame, startGame, setCharacterHit, setToggleMessage,setPlayersArray, setToggleLadderboard}

  return (
    <gameContext.Provider value={gameProvider}>
        <div className="App">
          <Header />
          <Form isGameOver = {isGameOver} time = {finalTimeUser}/>
          <Ladderboard toggleLadderboard={toggleLadderboard} playersArray = {playersArray} />
          <Characters />
          <Message toggleMessage={toggleMessage} characterHit = {characterHit} />
          <Board />
        </div>
    </gameContext.Provider>
  );
}

export default App;