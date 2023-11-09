import React from 'react'
import '../../styles/Menu/Gallery.css'

const Gallery= () => {
  return (
    <div className="gallery__container">
        <div className="gallery one" data-text="Cyberpunk City"></div>
        <div className="gallery two" data-text="Robot City"></div>
        <div className="gallery three" data-text="Universe 113"></div>
    </div>
  )
}

export default Gallery