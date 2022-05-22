import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {

useEffect(() => {
  console.log("props",props); // these props supply be with quizState and selectAnswerState
  props.setQuiz();
}, [])


  const question = props.quizState.question
//console.log("Quiz Station", props.quizState.answers)
  const answers = props.quizState.answers
  console.log("Answers", answers)

  const answerText = (answers ?? []).map(obj => obj.text)

  // const answerText = (answers ?? []).map(({text}) => (text));
  // const answerText = (answers ?? []).map(({answer_id, text}) => ({ [answer_id]: text }));
  // const answerText = (answersText ?? []).map(({id, text}) => ({ [id]: text }));
  
  console.log("Answer", answerText)


  // const answerText = (answers) => {
  //   props.quizState.answers.map(answer => {
  //   return answer
  //   })
  // }




  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
               {answerText[0]}
                <button>
                  SELECTED
                </button>
              </div>
             
              <div className="answer">
               {answerText[1]}
                <button>
                  Select
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