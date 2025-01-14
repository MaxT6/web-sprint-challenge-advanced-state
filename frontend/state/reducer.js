// ❗ You don't need to add extra reducers to achieve MVP
import * as types from "./action-types";
import { combineReducers } from "redux";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      if (state === 5) {
        return state * 0;
      } else {
        return state + action.payload;
      }

    case types.MOVE_COUNTERCLOCKWISE:
      if (state === 0) {
        return state + 5;
      } else {
        return state - action.payload;
      }
    default:
      return state;
  }
}

const initialQuizState = "";
function quiz(state = initialQuizState, action) {
  // debugger
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE:
      console.log("payload", action.payload);
      return (state = action.payload);

    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
      return (state = action.payload);
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      const { newQuestion, newTrueAnswer, newFalseAnswer, value } =
        action.payload;
      return {
        ...state,
        [newQuestion]: value,
        [newTrueAnswer]: value,
        [newFalseAnswer]: value,
      };

    case types.RESET_FORM:
      return { 
      newQuestion: "",
      newTrueAnswer: "",
      newFalseAnswer: "",} 

    default:
      return state;
  }
}

export default combineReducers({
  wheelState: wheel,
  quizState: quiz,
  selectedAnswerState: selectedAnswer,
  infoMessageState: infoMessage,
  formState: form,
});
