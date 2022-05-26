import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const onChange = (evt, id) => {
   
    let value = evt.target.value;
    console.log("EVT", value, "ID", id);
    if (id === "newQuestion") {
      props.inputChange(props.formState.newQuestion = value);
    } if (id === "newTrueAnswer") {
      props.inputChange(props.formState.newTrueAnswer = value);
    } if (id === "newFalseAnswer") {
      props.inputChange(props.formState.newFalseAnswer = value);
    }

    // console.log("NQ", newQuestion);
    // console.log("TA", newTrueAnswer);
    // console.log("FA", newFalseAnswer);
    console.log("STATE", props.formState);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.postQuiz(
      props.formState.newQuestion, 
      props.formState.newTrueAnswer, 
      props.formState.newFalseAnswer,
    )
  };

  

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={(evt) => onChange(evt, "newQuestion")}
        id="newQuestion"
        placeholder="Enter question"
        value={props.formState.newQuestion}
      />
      <input
        maxLength={50}
        onChange={(evt) => onChange(evt, "newTrueAnswer")}
        id="newTrueAnswer"
        placeholder="Enter true answer"
        value={props.formState.newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={(evt) => onChange(evt, "newFalseAnswer")}
        id="newFalseAnswer"
        placeholder="Enter false answer"
        value={props.formState.newFalseAnswer}
      />
       <button disabled={props.formState.newQuestion.trim().length > 0 && props.formState.newTrueAnswer.trim().length > 0 && props.formState.newFalseAnswer.trim().length > 0 ? false : true }id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
