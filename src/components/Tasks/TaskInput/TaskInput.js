import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import style from "./TaskInput.module.css";
//import styled from "styled-components";

// const FormControl = styled.div`
//   & {
//     margin: 0.5rem 0;
//   }
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : '#000'};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#000000'};
//     background: ${props => props.invalid ? '#ffd3d3' : '#ffffff'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//
//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }
// `;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*<FormControl invalid={!isInputValid && 'invalid'}>*/}
      {/*  <label>Задачи</label>*/}
      {/*  <input type="text" onChange={taskInputChangeHandler} />*/}
      {/*</FormControl>*/}
      <div className={`${style['form-control']} ${!isInputValid && style.invalid}`}>
          <label>Задачи</label>
          <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
