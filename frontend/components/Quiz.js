import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {

useEffect(() => {
  console.log("props",props); // these props supply be with quizState and selectAnswerState
  props.setQuiz();
}, [])


// ****** retlates to question *****
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
  

  // const onClick = (answer_id) => {
  //   0 === 0 ? 'SELECTED' : 'Select' //you need state to change the selection
  // }

  // const onClick = (id) => {
  //   if(id === answerID[0]) {
  //     return selectedAnswer()
  //   }
  // }

  const onClick = () => {props.selectAnswer(), console.log('onClick SELECTED', props.selectedAnswerState)}
  console.log('select', props.selectedAnswerState)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div 
                className={`answer ${'if ID === clicked Id' ? 'selected' : ''}`} 
                id = {answerID[0]}
                onClick={() => onClick()}>
              
               {answerText[0]}
                <button>
                  {/* {props.selectedAnswerState === '' ? 'Select' : 'Select'}  needs to specify state more specifically*/} 
                </button>
              </div>
             
              <div className="answer" id = {answerID[1]}>
               {answerText[1]}
                <button>
                  {props.selectedAnswerState === '' ? 'Select' : props.selectedAnswerState}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)