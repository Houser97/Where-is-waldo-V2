import React from 'react'
import '../styles/Loader.css'

const Loader = ({isWhiteBg = false}) => {
  return (
    <span className={`loader ${isWhiteBg && 'white__bg'}`}></span>
  )
}

export default Loader