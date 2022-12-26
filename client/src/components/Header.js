import '../styles/Header.css';
import Timer from './Timer';
import { useRef } from 'react';
import { CHARACTERS } from '../assets';

const Header = () => {
    const BMOelement = useRef(null);
    const MarcelineElement = useRef(null);
    const Tree = useRef(null);

    return(
        <header>
            <div className='characters-DIV'>
                <div className='where-is'>Where is...?</div>
                <div className='characters'>
                    <div className='photo-name'>
                        <img ref={BMOelement} src={CHARACTERS.BMO} alt='BMO' className='first-photo character'></img>
                        <div className='name'>BMO</div>
                    </div>

                    <div className='photo-name'>
                        <img ref={MarcelineElement} src={CHARACTERS.Marceline} alt='Marceline' className='first-photo character'></img>
                        <div className='name'>Marceline</div>
                    </div>

                    <div className='photo-name'>
                        <img ref={Tree} src={CHARACTERS.Trunks} alt='Tree Trunks' className='first-photo character'></img>
                        <div className='name'>Tree Trunks</div>
                    </div>
                </div>
            </div>
            <div className='timer'>
                <div>Timer</div>
                <Timer />
            </div>
        </header>
    )
}

export default Header;