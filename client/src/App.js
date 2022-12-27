import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import image from './assets/Images/BackgroundWaldo.jpg';
import Characters from './components/Characters';
import Header from './components/Header';
/*import Message from './components/Message';
import Form from './components/Form';
import Ladderboard from './components/Ladderboard';*/

export const gameContext = createContext();
export const userContext = createContext();

function App() {

  const imgRef = useRef(null);
  const square = useRef(null);
  const firstLi = useRef(null);
  const secondLi = useRef(null);
  const thirdLi = useRef(null);

  /*const OFFSET_Y = 140; // Corresponde a la altura del Header*/


  const [toggle, setToggle] = useState("hidden");
  const [message, setMessage] = useState("Houser");
  const [isGameOver, setIsGameOver] = useState("continueGame");
  const [numberOfCharacters, setNumberOfCharacters] = useState(3);
  const [coordsUser, setCoordsUser] = useState({coordX: 0, coordY: 0});
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
        /*console.log(`You hit ${character}`);*/
        removeCharacterFromList(character);
        setToggle("show");
        setMessage(`You have found ${character}!`);
        setNumberOfCharacters(number => number - 1);
      } else {
        /*console.log("Keep trying");*/
        setToggle("show-incorrect");
        setMessage(character);
        setMessage("Keep trying")
      }
    }

  const removeCharacterFromList = (character) => {
    let element;
        if(character === "Tree Trunks"){
          element = thirdLi.current;
        } else if(character === "BMO"){
          element = firstLi.current;
        } else{
          element=secondLi.current;
        }
        element.style.display = "none";
  }

  const setMagicDiv = (e) => {
    const magicDiv = square.current;
    magicDiv.style.display = "flex";

    let x = e.pageX;;
    let y = e.pageY;
    
    centerMagicDiv(x,y);
    [x, y] = setRelativeCoordinates(x,y);

    console.log('X')
    console.log(x)
    console.log('Y')
    console.log(y)

    setCoordsUser({coordX: x, coordY: y});
  } 

  const getValueLi = async (e) => {/*
    const magicDiv = square.current;
    magicDiv.style.display = "none";

    const li = e.target.textContent;
    const coords = await getCoordsBackEnd(li);
    let coordsSolution = "";
    coords.forEach(async doc => coordsSolution = doc.data())
    /*console.log(`Coord Solution X: ${coordsSolution.coordX}`)
    console.log(`Coord Solution Y: ${coordsSolution.coordY}`)
    console.log(coordsSolution.character)
    console.log(`Coord Selected X: ${coordsUser.coordX}`)
    console.log(`Coord Selected Y: ${coordsUser.coordY}`)
    checkIfSelected(coordsUser.coordX, coordsUser.coordY, coordsSolution.coordX,
      coordsSolution.coordY, coordsSolution.character);*/
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
            {/*<Message toggleMessage={toggle} message = {message} />*/}
            <div className='credits'>Photo by: <a href='https://www.reddit.com/r/adventuretime/comments/bvr37b/the_land_of_ooo_adventure_time_by_tom_preston/'>Tom Preston</a></div>
            <div className='magic-div' ref={square}>
              <div className='x-design-1 x-design'></div>
              <div className='x-design-2 x-design'></div>
              <div className='container-list'>
                <ul className='list-characters'>
                  <li className='li-element BMO' ref={firstLi} onClick = {getValueLi}>BMO</li>
                  <li className='li-element middle Marceline' ref={secondLi} onClick = {getValueLi}>Marceline</li>
                  <li className='li-element Tree-Trunks' ref={thirdLi} onClick = {getValueLi}>Tree Trunks</li>
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