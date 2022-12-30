import { useContext, useEffect, useState } from 'react';
import '../styles/Timer.css';
import { gameContext } from '../App';

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    const gameOver = useContext(gameContext).isGameOver;
    const getTime = useContext(gameContext).getTime;
    const isGame = useContext(gameContext).isGame; //Ayuda a inicar conteo al dar START en CHARACTERS.

    useEffect(() => {
        let intervalId;
        if(!gameOver && isGame){
                intervalId =  setInterval(() => {
                setSeconds(oldSeconds => oldSeconds + 1);
            }, 1000)
        }else if(gameOver){
            getTime(seconds);
        }

        return () => {
            clearInterval(intervalId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameOver, isGame]);


    function time_convert(num){ 
        const minutes = Math.floor(num / 60);  
        const seconds = num % 60;
        let minutesToDisplay;
        if(minutes <= 9){
            minutesToDisplay = `0${minutes}`;   
        } else {
            minutesToDisplay = `${minutes}`
        } 
        if (seconds <= 9) {
            return `${minutesToDisplay}:0${seconds}`;
        } else {
            return `${minutesToDisplay}:${seconds}`;
        }     
    }

    return(
        <div className='timer' id="remove">{
            time_convert(seconds)
        }</div>
    )
            
    
}

export default Timer;