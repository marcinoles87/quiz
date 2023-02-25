import React, { useState } from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'

 function Question() {

  const [random,setRandom] = useState();
  return (
    <div>
      <h1> Pytanie : </h1>
      
      {JSONDATA.map((item) => {
        return(

        <div key={item.answear}>
          <h2>{item.question}</h2>
          <p>{item.answear.ans1}</p>
          <p>{item.answear.ans2}</p>
          <p>{item.answear.ans3}</p>
          
        </div>)
      })}
    </div>
  )
}

export default Question
