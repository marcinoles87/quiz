import React, { useState } from 'react'
import JSONDATA from './JSONDATA.json'

import './question.css'




 function Question() {


const quest = [
    {
        question : "kto jest najlepszy w gry" ,

        answear : [
           {answearOption : "marcel" , correct : true},
           {answearOption : "susa" , correct : false},
           {answearOption : "kuga" , correct : false},
         
            
                  ]
    },

    {
      question : "kto jest najlepszy w lego" ,

      answear : [
         {answearOption : "marcel" , correct : false } ,
         {answearOption : "susa" , correct : false},
         {answearOption : "kuga" , correct : true},
       
          
                ]
  },

  {
    question : "kto jest najlepszy w puzzle" ,

    answear : [
       {answearOption : "marcel" , correct : false},
       {answearOption : "susa" , correct : true},
       {answearOption : "kuba" , correct : false},
     
        
              ]
},

{
  question : "kto jest najlepszy w strzaly wolnych" ,

  answear : [
     {answearOption : "marcel" , correct : true},
     {answearOption : "zuza" , correct : false},
     {answearOption : "kuba" , correct : false},
   
      
            ]
},

{
  question : "kto jest najlepszy w sport" ,

  answear : [
     {answearOption : "marcel" , correct : false},
     {answearOption : "tata" , correct : true},
     {answearOption : "kuba" , correct : false},
   
      
            ]
},

]
  

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [point, setCurrentPoint] = useState(0)
  const [showScore , setShowScore] = useState(false)
 

  

  const handleOnClick = () =>{
    
    let x =Math.floor(Math.random()*3) 
   
    setCurrentQuestion(x)

  }

 const handlePoint = (correct) => {
  
  
   if(correct === true){

    alert('correct answear')
    setCurrentPoint(point +1)
    
    
   }

   setCurrentQuestion(currentQuestion+1)

   setShowScore(false)
  
   if(currentQuestion === quest.length-1){
    alert('end game')
    setShowScore(true)
    setCurrentQuestion(0)
    setCurrentPoint(0)
    
   }

  
  
 }

  
  return (
  
    <div className='quiz-game'>

     
      <div className='question'>
   
      <h1> Pytanie  {currentQuestion+1} / {quest.length}</h1>
      <h2> {quest[currentQuestion].question}</h2>
      </div>

      {quest[currentQuestion].answear.map((answe) => {

        return(

          <div className='answear'>
              <button onClick={() => handlePoint(answe.correct)}>{answe.answearOption}</button>
        </div>
        )
        

      })}

      <button onClick={handleOnClick}>Chosse Question</button>
      <h1> Your score is {point}/{quest.length} </h1>


    
      
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
