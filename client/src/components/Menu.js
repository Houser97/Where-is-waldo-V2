import React from 'react'
import '../styles/Menu.css'
import Gallery from './Menu/Gallery'
import HeaderMenu from './Menu/HeaderMenu'

const Menu = () => {
  return (
    <div className='menu__container'>
      <HeaderMenu>Where is...?</HeaderMenu>
      <div className='games__container'>
        <div className='games__text'>Games</div>
        <Gallery />
      </div>
    </div>
  )
}

export default Menu