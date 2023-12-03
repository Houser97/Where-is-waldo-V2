import React, { useEffect, useState } from 'react'
import '../../styles/Leaderboard/WinnerCard.css'

const WinnerCard = ({winnerPosition, username, time, profileImg}) => {
  
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])
  
  const winnerClass = winnerPosition === 1 
  ? 'first_place' 
  : winnerPosition === 2 
  ? 'second_place' 
  : 'third_place'
  
  return (
    <div className={`winnerCard__container ${winnerClass} ${animated && 'show-winners'}`}>
        <div className='image__container'>
            <img alt='winner' src={profileImg} ></img>
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