import React from 'react'
import { useParams } from 'react-router';

function Word() {
  const { word } = useParams(); 
  return (
    <div>
    { isNaN(word) ? 
    <p>The Word of the Day is {word} </p>
    : 
    <p>The Number is  {word} </p>
  }
  </div>
  )
}

export default Word