import '../styles/Ladderboard.css';
import { useEffect, useState } from 'react';

const Ladderboard = ({playersArray, toggleLadderboard}) => {

    const [topFive, setTopFive] = useState([]);

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
        <div className={`ladderboard-section ${toggleLadderboard ? 'show':''}`}>
            <div className='ladderboard'>
                <div className='title-ladderboard'>Top 5</div>
                { (topFive.length > 0) ? (
                <ol className='list-top-player'>
                    {
                        topFive.map((player, i) => {
                            return(
                                <li className={`player player-${i+1}`}>
                                    <div className='list-player'>
                                        <div className='username'>{player.username}</div>
                                        <div className='user-time'>{player.time}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
                ) : ("Loading ...")}
            </div>
        </div>
    )
}

export default Ladderboard;