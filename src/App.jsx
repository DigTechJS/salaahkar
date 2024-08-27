import { useState } from 'react'
import background  from './assets/image.png'
import './App.css'
import Advice from './Components/Advice/Advice'
import image from '../src/assets/background.png'

const App=()=>{
  return (
    <>
      <img className='image' src={image} alt="" />
      <Advice/>
    </>
    
      
    
  )
  }

export default App
