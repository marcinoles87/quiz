import React, { useState } from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'

 function Question() {

  let [random,setRandom] = useState(0);

 const  handleOnClick = () => {

  setRandom = () => {
    random = Math.random(1)*10

    console.log(random)

  }}
  return (
    <div>
      <h1> Pytanie : </h1>
      <button className='next' onClick={handleOnClick}>Next</button>
      
      {JSONDATA.map((item) => {
        return(

        <div key={item.index}>
          <h2>{item.question}</h2>
          <p>{item.answear.ans1}</p>
          <p>{item.answear.ans2}</p>
          <p>{item.answear.ans3}</p>
          {random}
          
        </div>)
      })}
    </div>
  )
}

export default Question
