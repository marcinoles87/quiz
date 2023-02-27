import React, { useState } from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'




 function Question() {


const quest = [
    {
        "question" : "kto jest najlepszy w gry" ,
        "answear" : {
            "ans1" : "marcel",
            "ans2" : "kuba" ,
            "ans3" : "zuzia" 
         }
    },

    {
        "question" : "kto jest najlepszy w skladanie konstrukcji" ,
        "answear" : {
            "ans1" : "marcel",
            "ans2" : "kuba" ,
            "ans3" : "zuzia" 
         }
    },

    {
        "question" : "kto jest najlepszy w puzle" ,
        "answear" : {
            "ans1" : "marcel",
            "ans2" : "kuba" ,
            "ans3" : "zuzia" 
         }
    }
]
  

  let [random,setRandom] = useState();

  

  const handleOnClick = () =>{
    
    let x =Math.floor(Math.random()*3) 
   
    setRandom(x)
  }
  
  return (
    <div>
      <h1> Pytanie : {quest[0].question} </h1>
      <p>{quest.map((item) => {
        return(
          <div>
            <p>{item.answear.ans1}</p>
            
            </div>
        )
      })}</p>
      <button className='next' onClick={handleOnClick}>Next</button>


     
      
      {/* {JSONDATA.map((item) => {

       
        let y = Math.floor(Math.random()*10)
        
        return(

        <div >
          <h2>{item.question}</h2>
          <p>{item.answear.ans1}</p>
          <p>{item.answear.ans2}</p>
          <p>{item.answear.ans3}</p>
          {random}
          
        </div>)
      })} */}

      
      
    </div>
  )
}

export default Question
