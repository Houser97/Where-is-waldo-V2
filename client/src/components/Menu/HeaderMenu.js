import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Menu/HeaderMenu.css'

const HeaderMenu = ({ children }) => (
  <div className='header__menu'>
    {children}
    <Link to='leaderboard' className="leaderboard__button"><span>Leaderboard</span></Link>
  </div>
)

export default HeaderMenu