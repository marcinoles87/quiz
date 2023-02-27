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

    {
      question : "kto jest najlepszy w lego" ,

      answear : [
         {answearOption : "marcel" , correct : "false"},
         {answearOption : "susa" , correct : "false"},
         {answearOption : "kuga" , correct : "true"},
       
          
                ]
  },

  {
    question : "kto jest najlepszy w puzzle" ,

    answear : [
       {answearOption : "marcel" , correct : "false"},
       {answearOption : "susa" , correct : "true"},
       {answearOption : "kuga" , correct : "false"},
     
        
              ]
},

]
  

  let [currentQuestion , setCurrentQuestion] = useState(0);

  

  const handleOnClick = () =>{
    
    let x =Math.floor(Math.random()*3) 
   
    setCurrentQuestion(x)
  }
  
  return (
    <div>
      <h1> Pytanie  {currentQuestion+1} / {quest.length}</h1>
      <h2> {quest[currentQuestion].question}</h2>

      {quest[0].answear.map((answe) => {

        return(

          <div className='answear'>
              <button>{answe.answearOption}</button>
        </div>
        )
        

      })}

      <button onClick={handleOnClick}>Chosse Question</button>


     


     
      
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
