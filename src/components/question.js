import React, { useState } from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'




 function Question() {


const quest = [
    {
        question : "kto jest najlepszy w gry" ,

        answear : [
           {answearOption : "marcel" , correct : "true"},
           {answearOption : "susa" , correct : "false"},
           {answearOption : "kuga" , correct : "false"},
         
            
                  ]
    },

]
  

  let [random,setRandom] = useState();

  

  const handleOnClick = () =>{
    
    let x =Math.floor(Math.random()*3) 
   
    setRandom(x)
  }
  
  return (
    <div>
      <h1> Pytanie : {quest[0].question} </h1>
      <p>{quest[0].answear.map((answe) => {
        return(
        <button>{answe.answearOption}</button>
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
