import '../styles/Ladderboard.css';
import { userContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import { saveData, getLadderboard } from '../firebase';

const Ladderboard = ({playersArray, toggleLadderboard}) => {

    const [topFive, setTopFive] = useState(null);

    useEffect(() => {
        if(playersArray.length > 0){
            let players = [...playersArray].slice(5);
            players = players.map((player) => {
                player.time = time_convert(player.time)
            })
            setTopFive(players)
            console.log(players)
        }
    }, [playersArray])

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
        <div className='ladderboard-section'>
            <div className='ladderboard'>
                <div className='title-ladderboard'>Top 5</div>
                { (playersOrdered.length > 0) ? (
                <ol className='list-top-player'>
                    <li className='player player-1'>
                        <div className='list-player'>
                            <div className='username'>{playersOrdered[0].name}</div>
                            <div className='user-time'>{time_convert(playersOrdered[0].time)}</div>
                        </div>
                    </li>
                    <li className='player player-2'>
                        <div className='list-player'>
                            <div className='username'>{playersOrdered[1].name}</div>
                            <div className='user-time'>{time_convert(playersOrdered[1].time)}</div>
                        </div>
                    </li>
                    <li className='player player-3'>
                        <div className='list-player'>
                            <div className='username'>{playersOrdered[2].name}</div>
                            <div className='user-time'>{time_convert(playersOrdered[2].time)}</div>
                        </div>
                    </li>
                    <li className='player player-4'>
                        <div className='list-player'>
                            <div className='username'>{playersOrdered[3].name}</div>
                            <div className='user-time'>{time_convert(playersOrdered[3].time)}</div>
                        </div>
                    </li>
                    <li className='player player-5'>
                        <div className='list-player'>
                            <div className='username'>{playersOrdered[4].name}</div>
                            <div className='user-time'>{time_convert(playersOrdered[4].time)}</div>
                        </div>
                    </li>
                </ol>
                ) : ("empty")}
            </div>
        </div>
    )
}

export default Ladderboard;