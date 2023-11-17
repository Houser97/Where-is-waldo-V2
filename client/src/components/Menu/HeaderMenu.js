import React from 'react'
import '../../styles/Menu/HeaderMenu.css'

const HeaderMenu = ({children}) => {
  return (
    <div className='header__menu'>{children}</div>
  )
}

export default HeaderMenu