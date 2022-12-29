import React from 'react'
import '../styles/Scope.css'
import { CHARACTERS } from '../assets';

const Scope = () => {
  return (
    <div className='magic-div' ref={square}>
        <div className='x-design-1 x-design'></div>
        <div className='x-design-2 x-design'></div>
        <div className='container-list'>
            <ul className='list-characters'>
                {
                CHARACTERS.map((character, i) => {
                    return(
                    <li key={`li-${i}`} 
                    data-id = {i}
                    className={`li-element ${i < CHARACTERS.length -1 ? '':'last-li-element'}`} 
                    ref={element => charactersArray.current[i] = element} 
                    onClick = {getValueLi}>{character.name}</li>
                    )
                })
                }
            </ul>
        </div>
    </div>
  )
}

export default Scope