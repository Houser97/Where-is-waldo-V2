import React from 'react'
import '../../styles/Menu/Gallery.css'
import { Link } from "react-router-dom";
import { useImageIsLoaded } from '../hooks/useImageIsLoaded';
import Loader from '../Loader';

const Gallery = () => {

  const [isImageLoaded, handleImageLoad] = useImageIsLoaded();

  return (
    <div className={`${isImageLoaded ? 'gallery__container' : 'loader__container'} `}>
      {isImageLoaded
        ? <>
          <Link to='Cyberpunk-City' className="gallery one" data-text="Cyberpunk City"></Link>
          <Link to='Robot-City' className="gallery two" data-text="Robot City"></Link>
          <Link to='Universe-113' className="gallery three" data-text="Universe 113"></Link>
        </>
        : <Loader />}
      <img className='gallery__image-loader' alt='board' src='https://res.cloudinary.com/dluwqcce9/image/upload/v1700413484/CyberpunkCity_dzadne.jpg' onLoad={handleImageLoad}></img>
    </div>
  )
}

export default Gallery