import React from 'react'
import '../styles/Loader.css'

const Loader = ({ isWhiteBg = false }) => <span className={`loader ${isWhiteBg && 'white__bg'}`}></span>


export default Loader