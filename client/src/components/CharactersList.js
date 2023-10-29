import React from 'react'
import { CHARACTERS } from '../assets'
import '../styles/CharactersList.css'

const CharactersList = ({getCharacter}) => {

  return (
    <div className='container-list'>
        <ul className='list-characters'>
            {
            Object.keys(CHARACTERS).map((character, i) => {
                return(
                <li key={`li-${i}`} 
                data-id = {i}
                className={`li-element ${i < Object.keys(CHARACTERS).length -1 ? '':'last-li-element'}`} 
                onClick = {getCharacter}><img src={CHARACTERS[character].image} className='img__character-item'></img><span>{CHARACTERS[character].name}</span></li>
                )
            })
            }
        </ul>
    </div>
  )
}

export default CharactersList