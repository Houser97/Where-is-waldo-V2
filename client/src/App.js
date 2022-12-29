import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import Message from './components/Message';
import Form from './components/Form';
import Board from './components/Board';
/*import Ladderboard from './components/Ladderboard';*/

export const gameContext = createContext();
export const userContext = createContext();

function App() {

  /*const OFFSET_Y = 140; // Corresponde a la altura del Header*/


  const [toggleMessage, setToggleMessage] = useState(false);
  const [message, setMessage] = useState("Houser");

  const [isGameOver, setIsGameOver] = useState("continueGame");
  const [numberOfCharacters, setNumberOfCharacters] = useState(3);
  const [coordsUser, setCoordsUser] = useState({x: 0, y: 0});
  const [finalTimeUser, setFinalTimeUser] = useState(0);
  const [username, setUsername] = useState(0);

  const[isGame, setIsGame] = useState(false); //Ayudará a iniciar COUNTER al presionar START en CHARACTERS

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setToggleMessage(false);
    }, 2000);

    return () => {
      clearTimeout(intervalId);
    }
  }, [toggleMessage])

  useEffect(() => {
    if(numberOfCharacters === 0){
      setIsGameOver("stopGame");
    }
  }, [numberOfCharacters])


  const getUserName = (e) => {
    e.preventDefault();
    const popUpForm = e.target.parentNode;
    popUpForm.style.display = "none";
    let name = [...e.target];
    let userName = name[0].value;
    setUsername(userName);
    /*console.log(name[0].value);*/
    e.target.reset();
  }

  const getTime = (seconds) => {
    if(isGameOver === "stopGame"){
      setFinalTimeUser(previousTime => previousTime + seconds);
    }
  }

  const gameProvider = {isGameOver, getTime, isGame, setIsGame, setToggleMessage, setMessage}

  return (
    <gameContext.Provider value={gameProvider}>
      <userContext.Provider value={[username, finalTimeUser]}>
        <div className="App">
          <Header />
          <Form getUserName={getUserName} gameOver = {isGameOver} />
          {/*<Ladderboard />*/}
          <Characters />
          <Message toggleMessage={toggleMessage} message = {message} />
          <Board />
        </div>
        </userContext.Provider>
    </gameContext.Provider>
  );
}

export default App;