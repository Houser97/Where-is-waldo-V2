import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { CHARACTERS } from './assets';
import image from './assets/Images/BackgroundWaldo.jpg';
import Characters from './components/Characters';
import Header from './components/Header';
import Message from './components/Message';
/*import Form from './components/Form';
import Ladderboard from './components/Ladderboard';*/

export const gameContext = createContext();
export const userContext = createContext();

function App() {

  const imgRef = useRef(null);
  const square = useRef(null);

  const charactersArray = useRef([]); //Referencia de elementos LI de Magic Div.

  /*const OFFSET_Y = 140; // Corresponde a la altura del Header*/


  const [toggle, setToggle] = useState("hidden");
  const [message, setMessage] = useState("Houser");
  const [isGameOver, setIsGameOver] = useState("continueGame");
  const [numberOfCharacters, setNumberOfCharacters] = useState(3);
  const [coordsUser, setCoordsUser] = useState({x: 0, y: 0});
  const [finalTimeUser, setFinalTimeUser] = useState(0);
  const [username, setUsername] = useState(0);

  const[isGame, setIsGame] = useState(false); //Ayudará a iniciar COUNTER al presionar START en CHARACTERS

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setToggle("hidden");
    }, 2000);

    return () => {
      clearTimeout(intervalId);
    }
  }, [toggle])

  useEffect(() => {
    if(numberOfCharacters === 0){
      setIsGameOver("stopGame");
    }
  }, [numberOfCharacters])

  const centerMagicDiv = (x,y) =>{
    const width = square.current.offsetWidth/2;
    const height = square.current.offsetHeight/2;

    const magicDiv = document.querySelector(".magic-div");

    magicDiv.style.top = `${y-height}px`;
    magicDiv.style.left = `${x-width}px`
  }

  const setRelativeCoordinates = (x,y) => {
    const widthImage = imgRef.current.offsetWidth;
    const heightImage = imgRef.current.offsetHeight;

    let relX = Math.round((x/widthImage)*100);
    let relY = Math.round(((y)/heightImage)*100);

    return [relX, relY];
  }

  function checkIfSelected(selectedX, selectedY, solutionX, solutionY, character){
      let componentX = Math.pow(Math.abs(selectedX-solutionX),2);
      let componentY = Math.pow(Math.abs(selectedY-solutionY),2)
      let distance = Math.round(Math.sqrt(componentX+componentY));

      if(distance < 5){
        console.log(`You hit ${character}`);
        return true
        /*removeCharacterFromList(character);
        setToggle("show");
        setMessage(`You have found ${character}!`);
        setNumberOfCharacters(number => number - 1);*/
      } else {
        console.log("Keep trying");
        return false
        /*setToggle("show-incorrect");
        setMessage(character);
        setMessage("Keep trying")*/
      }
    }

  const removeCharacterFromList = (liElement) => {
    const liId = liElement.target.dataset.id;
    const li = charactersArray.current[liId ]
    li.style.display = 'none'
  }

  const setMagicDiv = (e) => {
    const magicDiv = square.current;
    magicDiv.style.display = "flex";

    let x = e.pageX;;
    let y = e.pageY;
    
    centerMagicDiv(x,y);
    [x, y] = setRelativeCoordinates(x,y);

    setCoordsUser({x, y});
  } 

  const getValueLi = (e) => {
    const CHARACTER = e.target.textContent;
    fetch(`http://localhost:5000/api/get_coordinates/${CHARACTER}`)
    .then(response => response.json())
    .then(data => {
      if(checkIfSelected(coordsUser.x, coordsUser.y, data.x, data.y, CHARACTER)){
        removeCharacterFromList(e)
        setToggle("show");
        setMessage(`You have found ${CHARACTER}!`);
        setNumberOfCharacters(number => number - 1);
      } else {
        setToggle("show-incorrect");
        setMessage(CHARACTER);
        setMessage("Keep trying")
      }
      const magicDiv = square.current;
      magicDiv.style.display = "none";
    })
  }

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

  const gameProvider = {isGameOver, getTime, isGame, setIsGame}

  return (
    <gameContext.Provider value={gameProvider}>
      <userContext.Provider value={[username, finalTimeUser]}>
        <div className="App">
          <Header />
          {/*<Form getUserName={getUserName} gameOver = {isGameOver} />
          <Ladderboard />*/}
          <Characters />
          <div className='image-container'>
            <img src={image} alt='cartoon-network' className='img-project' ref={imgRef} onClick = {setMagicDiv}></img>
            <div className='credits'>Photo by: <a href='https://www.reddit.com/r/adventuretime/comments/bvr37b/the_land_of_ooo_adventure_time_by_tom_preston/'>Tom Preston</a></div>
            <div className='magic-div' ref={square}>
              <div className='x-design-1 x-design'></div>
              <div className='x-design-2 x-design'></div>
              <div className='container-list'>
                <ul className='list-characters'>
                  {
                    CHARACTERS.map((character, i) => {
                      return(
                        <li key={`li-${i}`} 
                        data-id = {i}
                        className={`li-element ${i < CHARACTERS.length -1 ? '':'last-li-element'}`} 
                        ref={element => charactersArray.current[i] = element} 
                        onClick = {getValueLi}>{character.name}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        </userContext.Provider>
    </gameContext.Provider>
  );
}

export default App;