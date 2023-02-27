
import React,{useState} from 'react'

import Question from './question'

import './quiz.css'

 function Quiz() {

  const [point , setPoint] = useState(0)
  return (
    <div className='quiz-wrapper'>

        <div className='quiz-head'>
            <Question ></Question>

            <h1>Your current point : {point}</h1>
        </div>
    </div>
  )
}

export default Quiz
