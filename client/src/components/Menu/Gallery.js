import React from 'react'
import '../../styles/Menu/Gallery.css'
import { Link } from "react-router-dom";

const Gallery= () => {
  return (
  
    <div className="gallery__container">
        <Link to='Cyberpunk-City' className="gallery one" data-text="Cyberpunk City"></Link>
        <Link to='Robot-City' className="gallery two" data-text="Robot City"></Link>
        <Link to='Universe-113' className="gallery three" data-text="Universe 113"></Link>
    </div>
  )
}

export default Gallery