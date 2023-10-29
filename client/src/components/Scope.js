import React from 'react'
import '../styles/Scope.css'

const Scope = ({scopeRef}) => {
  return (
    <div className='magic-div' ref={scopeRef}>
        <div className='x-design-1 x-design'></div>
        <div className='x-design-2 x-design'></div>
    </div>
  )
}

export default Scope