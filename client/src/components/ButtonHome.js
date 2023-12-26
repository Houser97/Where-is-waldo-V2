import React from "react";
import { Link } from "react-router-dom";
import '../styles/ButtonHome.css'

const ButtonHome = () => {
    return (
        <Link to='/' className='home__button'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
            <span>Home</span>
        </Link>
    )
}

export default ButtonHome;