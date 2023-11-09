import React from 'react'
import '../../styles/Menu/Gallery.css'

const Gallery= () => {
  return (
    <div className="gallery__container">
        <div className="gallery one" data-text="Board 1"></div>
        <div className="gallery two" data-text="Board 2"></div>
        <div className="gallery three" data-text="Board 3"></div>
    </div>
  )
}

export default Gallery