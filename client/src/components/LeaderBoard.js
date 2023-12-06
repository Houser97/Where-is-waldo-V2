import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/LeaderBoard.css'
import PlayerCard from './Leaderboard/PlayerCard'
import WinnerCard from './Leaderboard/WinnerCard'
import Loader from './Loader'

const LeaderBoard = () => {

  const [scores, setScores] = useState([]);

  const { idGame } = useParams();

  useEffect(() => {
    fetch(`/api/get_scores/${idGame}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(scores => {
      if(!scores) return;
      setScores(scores)
    })
  }, [])

  if(!scores.length) return (
    <div className='leaderboard__container'>
      <Loader />  
    </div>
  )

  const winners = scores.slice(0,3);
  const players = scores.slice(3)
  
  return (
    <div className='leaderboard__container'>
      <div className='winners__container'>
        {winners.map(({time, username, image}, index) => (
          <WinnerCard
            key={index}
            profileImg={image}
            username={username}
            time={time}
            winnerPosition={index + 1}
          />
        ))}
      </div>
      <div className='players__container'>
          {players.map(({username, time, image}, index) => (
            <PlayerCard 
              key={index + 3}
              username={username}
              time={time}
              profileImg={image}
              position={index + 4}
            />
          ))}
      </div>
    </div>
  )
}

export default LeaderBoard