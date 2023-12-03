import React from 'react'
import '../../styles/Leaderboard/PlayerCard.css'

const PlayerCard = ({profileImg, username, time, position}) => {
  return (
    <div className='playercard__container'>
        <div className='player__data'>
            <span className='player__position'>{position}.</span>
            <img className='' src={profileImg} alt='player_image'></img>
            <span className='player__username'>{username}</span>
        </div>
        <div className='player__time'>{time}</div>
    </div>
  )
}

export default PlayerCard