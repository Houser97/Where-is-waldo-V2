import React from 'react'
import { BOARDS } from '../../assets'
import '../../styles/Leaderboard/LeaderboardOptions.css'

const LeaderboardOptions = ({ setGame, selectedGame }) => {
    return (
        <div className='options__container'>
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