import React from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'

export default function question() {
  return (
    <div>
      <h1> Pytanie : </h1>
      {JSONDATA.map((item) => {
        return(
        <div key={item.answear}>
          <h2>{item.question}</h2>
          <p>{item.answear}</p>
          </div>)
      })}
    </div>
  )
}
