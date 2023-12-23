import React, { useState } from 'react'
import '../../styles/Menu/Gallery.css'
import { Link } from "react-router-dom";
import { useImageIsLoaded } from '../hooks/useImageIsLoaded';
import Loader from '../Loader';
import useWindowSize from '../../hooks/windowSizeHook';

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isImageLoaded, handleImageLoad] = useImageIsLoaded();
  const { width, height } = useWindowSize();

  const games = [
    { to: 'Cyberpunk-City', className: 'gallery one', dataText: 'Cyberpunk City' },
    { to: 'Robot-City', className: 'gallery two', dataText: 'Robot City' },
    { to: 'Universe-113', className: 'gallery three', dataText: 'Universe 113' },
  ];

  const ResponsiveGames = () => {
    if (width >= 600) {
      return <>
        {games.map((game, index) => (
          <Link key={index} to={game.to} className={game.className} data-text={game.dataText}></Link>
        ))}
      </>
    }
    return <div className='carousel__games'>
      {games.map((game, index) => (
        <div key={game.className} className='carousel__game' style={{ transform: `translateX(calc(-${currentIndex * 100}%))` }}>
          <Link key={index} to={game.to} className={game.className} data-text={game.dataText}></Link>
        </div>
      ))}
    </div>
  }

  const handleClick = (direction) => {
    let newIndex = direction === 1 ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0) {
      newIndex = games.length - 1
    }

    if (newIndex >= games.length) {
      newIndex = 0
    }
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  return (
    <div className={`${isImageLoaded ? 'gallery__container' : 'loader__container'}`}>
      {isImageLoaded ? (
        <>
          <button className='button__arrow left__arrow' onClick={() => handleClick(1)}>Left</button>
          {ResponsiveGames()}
          <button className='button__arrow right__arrow' onClick={() => handleClick(0)}>Right</button>
        </>
      )
        : <Loader />}
      <img className='gallery__image-loader' alt='board' src='https://res.cloudinary.com/dluwqcce9/image/upload/v1700413484/CyberpunkCity_dzadne.jpg' onLoad={handleImageLoad}></img>
    </div>
  )
}

export default Gallery