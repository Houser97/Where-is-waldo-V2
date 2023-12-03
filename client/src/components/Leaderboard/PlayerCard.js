import React from 'react'
import '../../styles/Leaderboard/PlayerCard.css'

const PlayerCard = ({profileImg, username, time, position}) => {
  return (
    <div className='playercard__container'>
        <span className='player__position'>{position}</span>
        <img className='' src={profileImg} alt='player_image'></img>
        <span className='player__username'>{username}</span>
        <span className='player__time'>{time}</span>
    </div>
  )
}

export default PlayerCard