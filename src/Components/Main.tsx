import React from 'react'
// import { Question } from '../Types/quiz_type';
// import { getQuiz } from '../services/quizService';
import QuestionCard from './QuestionCard';

function Main() {

    

// if(!quizArr.length){
//     return(
//     <h3>loading...</h3>
//     )
// }
  return (
    <>
      <QuestionCard
        // btn = {btnName}
        // Q_No= {currentQuestion + 1} 
        // ans= {quizArr[currentQuestion].answer}
        // opt = {quizArr[currentQuestion].options}
        // ques = {quizArr[currentQuestion].question}
        // callback= {submitHandler}
      />
      
    </>
  )
}

export default Main
