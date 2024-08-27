import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './advice.css'
const Advice = () => {
    const [advice, setAdvice]=useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            setAdvice("");
            const response = await fetch('https://api.adviceslip.com/advice');
    
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            setAdvice(data.slip.advice);
          } catch (error) {
            console.error('Error fetching advice:', error);
            // Optionally display an error message to the user
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
    {/* <div className="loader"></div> */}
    {advice === "" ? (
      <div className="loader"></div>
    ) : (
      <Card ad={advice} />
    )}
      
    </>
      
  )
}

export default Advice