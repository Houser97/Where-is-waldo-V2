import React, { useState } from 'react'
import '../../styles/Menu/Gallery.css'
import { Link } from "react-router-dom";
import { useImageIsLoaded } from '../hooks/useImageIsLoaded';
import Loader from '../Loader';
import useWindowSize from '../../hooks/windowSizeHook';

const MARGIN_RIGHT = 40;

const Arrow = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>greater-than</title><path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" /></svg>

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
        <div key={game.className} className='carousel__game' style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * MARGIN_RIGHT}px))` }}>
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
    setCurrentIndex(newIndex)
  }

  return (
    <div className={`${isImageLoaded ? 'gallery__container' : 'loader__container'}`}>
      {isImageLoaded ? (
        <>
          {ResponsiveGames()}
          <div className='carousel__btns'>
            <button className='button__arrow left__arrow' onClick={() => handleClick(1)}>{Arrow()}</button>
            <button className='button__arrow right__arrow' onClick={() => handleClick(0)}>{Arrow()}</button>
          </div>
        </>
      )
        : <Loader />}
      <img className='gallery__image-loader' alt='board' src='https://res.cloudinary.com/dluwqcce9/image/upload/v1700413484/CyberpunkCity_dzadne.jpg' onLoad={handleImageLoad}></img>
    </div>
  )
}

export default Gallery