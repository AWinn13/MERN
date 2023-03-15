import React from 'react'
import { useParams } from 'react-router-dom';


function Number() {
  const { number } = useParams();
  return (
    <div>
    <div>The Number is : {number} </div>
    <img src="https://en.wikipedia.org/wiki/Count_von_Count#/media/File:Count_von_Count_kneeling.png" alt="the count" />
    </div>
  )
}

export default Number   