import React from 'react'
import './card.css'
// import img from './a.svg'

const Card = ({ad}) => {
  return (
    /* From Uiverse.io by aadium */ 
<div className="card">
  <div style={{fontSize:'40px'}}>My advice for you is: </div>
  <div>{ad}</div>
  
    
</div>
    
  )
}

export default Card