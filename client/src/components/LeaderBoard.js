import React from 'react'
import '../styles/LeaderBoard.css'
import PlayerCard from './Leaderboard/PlayerCard'
import WinnerCard from './Leaderboard/WinnerCard'

const LeaderBoard = () => {
  return (
    <div className='leaderboard__container'>
      <div className='winners__container'>
        <WinnerCard profileImg={'https://res.cloudinary.com/dluwqcce9/image/upload/v1697390686/InTouch/irlci3ocrmxri0dlxdz0.jpg'} username={'House'} time={'02:03'} winnerPosition={1}/>
        <WinnerCard profileImg={'https://res.cloudinary.com/dluwqcce9/image/upload/v1697735636/InTouch/lrlmwnzacirgh3sdblyo.jpg'} username={'Bethoveen'} time={'03:12'} winnerPosition={2}/>
        <WinnerCard profileImg={'https://res.cloudinary.com/dluwqcce9/image/upload/v1697392849/InTouch/lzxr2waxbhvewptjbegy.jpg'} username={'Lucky'} time={'04:43'} winnerPosition={3}/>
      </div>
      <div className='players__container'>

      </div>
    </div>
  )
}

export default LeaderBoard