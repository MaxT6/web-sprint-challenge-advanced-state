// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'
const URL = "http://localhost:9000/api/quiz/next"
const POSTURL =  "http://localhost:9000/api/quiz/answer"

export function moveClockwise() { 
  return({type: types.MOVE_CLOCKWISE, payload: 1})
}
 
export function moveCounterClockwise() {
  return({type: types.MOVE_COUNTERCLOCKWISE, payload: 1}) 
}

export const setQuiz = () => (dispatch) => {
  axios
  .get(URL)
  .then(res => {
    console.log("res.data", res.data) //===>{} w/ quiz id, quiz queston, and an array for answers
    dispatch({
      type: types.SET_QUIZ_INTO_STATE,
      payload: res.data//passes in object
    })
  })
}




export function selectAnswer(id) {
 return({type: types.SET_SELECTED_ANSWER, payload: id})
      

}

export function setMessage(message) { // this will be where the axios post request goes
  return({type: types.SET_INFO_MESSAGE, payload: message})
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz())
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quizID, answerID) {
  // console.log("POST ID's", quizID, answerID)
  return function (dispatch) {
    axios
      .post(POSTURL, {
        "quiz_id": quizID,
        "answer_id": answerID,
      })
      .then(res => {
        console.log("new RES", res)
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message))
        dispatch(setQuiz())
      })
      
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {

    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
