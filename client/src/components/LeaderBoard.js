import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import '../styles/LeaderBoard.css'
import LeaderboardOptions from './Leaderboard/LeaderboardOptions'
import LoaderLeaderBoard from './Leaderboard/LoaderLeaderBoard'
import PlayerCard from './Leaderboard/PlayerCard'
import WinnerCard from './Leaderboard/WinnerCard'

const LeaderBoard = () => {

  const { state } = useLocation();

  const [scores, setScores] = useState([]);
  const [selectedGame, setselectedGame] = useState(state ? state.game : 'Cyberpunk-City')

  useEffect(() => {
    if (!selectedGame.length) return;
    fetch(`/api/scores/${selectedGame}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(scores => {
        if (!scores) return;
        setScores(scores)
      })
  }, [selectedGame])

  if (!scores.length) return (
    <div className='leaderboard__container-loader'>
      <LoaderLeaderBoard />
    </div>
  )

  const winners = scores.slice(0, 3);
  const players = scores.slice(3)

  function time_convert(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    const minutesToDisplay = (minutes <= 9) ? `0${minutes}` : `${minutes}`;
    const secondsToDisplay = (seconds <= 9) ? `0${seconds}` : `${seconds}`;

    return `${minutesToDisplay}:${secondsToDisplay}`;
  }

  return (
    <div className='leaderboard__container'>
      <LeaderboardOptions setGame={setselectedGame} selectedGame={selectedGame} />
      <div className='winners__container'>
        {winners.map(({ time, username, image }, index) => (
          <WinnerCard
            key={index}
            profileImg={image}
            username={username}
            time={time_convert(time)}
            winnerPosition={index + 1}
          />
        ))}
      </div>
      <div className='players__container'>
        {players.map(({ username, time, image }, index) => (
          <PlayerCard
            key={index + 3}
            username={username}
            time={time_convert(time)}
            profileImg={image}
            position={index + 4}
          />
        ))}
      </div>
    </div>
  )
}

export default LeaderBoard