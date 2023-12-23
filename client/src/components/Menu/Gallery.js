import React from 'react'
import '../../styles/Menu/Gallery.css'
import { Link } from "react-router-dom";
import { useImageIsLoaded } from '../hooks/useImageIsLoaded';
import Loader from '../Loader';
import useWindowSize from '../../hooks/windowSizeHook';

const Gallery = () => {

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
    return <div>

      {games.map((game, index) => (
        <Link key={index} to={game.to} className={game.className} data-text={game.dataText}></Link>
      ))}

    </div>
  }

  return (
    <div className={`${isImageLoaded ? 'gallery__container' : 'loader__container'}`}>
      {isImageLoaded ? (
        ResponsiveGames()
      )
        : <Loader />}
      <img className='gallery__image-loader' alt='board' src='https://res.cloudinary.com/dluwqcce9/image/upload/v1700413484/CyberpunkCity_dzadne.jpg' onLoad={handleImageLoad}></img>
    </div>
  )
}

export default Gallery