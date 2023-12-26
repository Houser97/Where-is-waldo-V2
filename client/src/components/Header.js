import { useState } from 'react';
import '../styles/Header.css';
import HomeButton from './HomeButton';
import CharactersStatus from './CharactersStatus';
import Timer from './Timer';

const Header = () => {

    const [toggleSvg, setToggleSvg] = useState(false);

    return (
        <header>
            <div className='timer__home-container'>
                <HomeButton />
                <Timer />
            </div>
            <div className='open-close-characters' onClick={() => setToggleSvg(prev => !prev)}>
                <svg className={`open-svg svg-header ${!toggleSvg ? '' : 'svg-hide'}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
                <svg className={`open-svg svg-header ${toggleSvg ? '' : 'svg-hide'}`} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </div>
            <CharactersStatus toggleSvg={toggleSvg} />
        </header>
    )
}

export default Header;