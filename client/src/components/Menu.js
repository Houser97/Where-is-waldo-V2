import React from 'react'
import '../styles/Menu.css'
import Gallery from './Menu/Gallery'
import HeaderMenu from './Menu/HeaderMenu'

const Menu = () => {
  return (
    <div className='menu__container'>
      <HeaderMenu>Where is...?</HeaderMenu>
      <Gallery />
    </div>
  )
}

export default Menu