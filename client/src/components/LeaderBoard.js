import React from 'react'
import '../styles/LeaderBoard.css'
import WinnerCard from './Leaderboard/WinnerCard'

const LeaderBoard = () => {
  return (
    <div className='leaderboard__container'>
      <WinnerCard />
    </div>
  )
}

export default LeaderBoard