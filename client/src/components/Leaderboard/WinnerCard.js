import React from 'react'
import '../../styles/Leaderboard/WinnerCard.css'

const WinnerCard = () => {
  return (
    <div className='winnerCard__container'>
        <div className='image__container'>
            <img alt='winner' src='https://res.cloudinary.com/dluwqcce9/image/upload/v1697390686/InTouch/irlci3ocrmxri0dlxdz0.jpg'></img>
            <span className='winner__place'>1</span>
        </div>
        <div className='winner__data'>
            <span className='winner__name'>Houser</span>
            <span className='winner_time'>02:03</span>
        </div>
    </div>
  )
}

export default WinnerCard