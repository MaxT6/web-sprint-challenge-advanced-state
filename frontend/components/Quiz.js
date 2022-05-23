import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {

useEffect(() => {
  console.log("props",props); // these props supply be with quizState and selectAnswerState
  props.setQuiz();
}, [])


// ****** retlates to question *****
  console.log("quiz id", props.quizState.quiz_id);
  const quiz_id = props.quizState.quiz_id
  console.log(props.selectAnswer)
  const question = props.quizState.question

// ***** relates to answerText *****
  //console.log("Quiz Station", props.quizState.answers)
  const answers = props.quizState.answers
  console.log("Answers", answers)

  const answerText = (answers ?? []).map(obj => obj.text)
  console.log("Answer Text", answerText)
  // const answerText = (answers ?? []).map(({text}) => (text));
  // const answerText = (answers ?? []).map(({answer_id, text}) => ({ [answer_id]: text }));
  // const answerText = (answersText ?? []).map(({id, text}) => ({ [id]: text }));
  

// ***** relates to answerID *****
const answerID = (answers ?? []).map(obj => obj.answer_id)
console.log("Answer ID", answerID)
  



  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div 
                className={`answer ${props.selectedAnswerState === answerID[0] ? 'selected' : ''}`} 
                id = {answerID[0]}>
              
               {answerText[0]}
                <button onClick={() => props.selectAnswer(answerID[0])}>
                  {props.selectedAnswerState === answerID[0] ? 'SELECTED' : 'Select'}
                </button>
              </div>
             
              <div className={`answer ${props.selectedAnswerState === answerID[1] ? 'selected' : ''}`}>
               {answerText[1]}
                <button onClick={() => props.selectAnswer(answerID[1])}>
                  {props.selectedAnswerState === answerID[1] ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button 
              disabled={`${props.selectedAnswerState === answerID[0] || props.selectedAnswerState === answerID[1] ? "" : "{true}" }`} 
              id="submitAnswerBtn"
              onClick={() => props.postAnswer(quiz_id, props.selectedAnswerState )}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)