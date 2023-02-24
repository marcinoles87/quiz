import React from 'react'
import JSONDATA from './JSONDATA.json'

export default function question() {
  return (
    <div>

      {JSONDATA.map((item) => {
        return(
        <div>
          <h2>{item.question}</h2>
          <p>{item.answear}</p>
          </div>)
      })}
    </div>
  )
}
