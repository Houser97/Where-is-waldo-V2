import { createContext, useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import Message from './components/Message';
import Form from './components/Form';
import Board from './components/Board';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer';

export const gameContext = createContext();
export const userContext = createContext();

function App() {

  /*const OFFSET_Y = 140; // Corresponde a la altura del Header*/

  const { idGame } = useParams();

  //Estados de Message
  const [toggleMessage, setToggleMessage] = useState(false);

  //Estados de flujo de juego
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfCharacters, setNumberOfCharacters] = useState(3);

  //Estados de SCOPE
  const [characterHit, setCharacterHit] = useState(null); // Estado que cambia en SCOPE y pasa nombre de personaje a Message.

  const [finalTimeUser, setFinalTimeUser] = useState(0);

  const [startGame, setStartGame] = useState(false); //Ayudará a iniciar COUNTER al presionar START en CHARACTERS

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
    if (numberOfCharacters <= 0) {
      setIsGameOver(true);
    }
  }, [numberOfCharacters])

  useEffect(() => {
    // Hace aparecer Message solo cuando se halla un personaje.
    if (characterHit) {
      setToggleMessage(true);
      setNumberOfCharacters(number => number - 1);
    }
  }, [characterHit])

  const getTime = (seconds) => {
    setFinalTimeUser(previousTime => previousTime + seconds);
  }

  const gameProvider = { isGameOver, getTime, setStartGame, startGame, setCharacterHit, setToggleMessage }

  return (
    <gameContext.Provider value={gameProvider}>
      <div className="App">
        <Header />
        <Form isGameOver={isGameOver} time={finalTimeUser} game={idGame} />
        <Characters SelectedBoard={idGame} />
        <Message toggleMessage={toggleMessage} characterHit={characterHit} />
        <Board SelectedBoard={idGame} />
        <Footer />
      </div>
    </gameContext.Provider>
  );
}

export default App;