import React from 'react'
import '../../styles/Leaderboard/WinnerCard.css'

const WinnerCard = ({winnerPosition, username, time, profileImg}) => {
  return (
    <div className='winnerCard__container'>
        <div className='image__container'>
            <img alt='winner' src={profileImg}></img>
            <span className='winner__place'>{winnerPosition}</span>
        </div>
        <div className='winner__data'>
            <span className='winner__name'>{username}</span>
            <span className='winner_time'>{time}</span>
        </div>
    </div>
  )
}

export default WinnerCard