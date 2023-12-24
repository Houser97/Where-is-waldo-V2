import React from 'react'
import { Link } from 'react-router-dom'
import { BOARDS } from '../../assets'
import '../../styles/Leaderboard/LeaderboardOptions.css'

const ButtonHome = () => {
    return (
        <Link to='/' className='home__button'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
            <span>Home</span>
        </Link>
    )
}

const LeaderboardOptions = ({ setGame, selectedGame }) => {
    return (
        <div className='options__container'>
            <ButtonHome />
            {Object.keys(BOARDS).map((board) =>
                <button
                    key={board}
                    className='option__leaderboard'
                    onClick={() => setGame(board)}
                >
                    {board.split('-').join(' ')}
                    <span className={`visual__selector ${selectedGame === board && 'show__visual-selector'}`}></span>
                </button>
            )}
        </div>
    )
}

export default LeaderboardOptions