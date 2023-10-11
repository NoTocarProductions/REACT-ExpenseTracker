import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  // })

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value
    //     };
    // })
  };
  const AmountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount: event.target.value
    //     };
    // })
  };
  const DateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     };
    // })
  };

  // const inputChangeHandler = (identifier, value) => {
  //     if (identifier === 'title') {
  //         SetEnteredTitle(value);
  //     } else if (identifier === 'date') {
  //         SetEnteredDate(value);
  //     } else {
  //         SetEnteredAmount(value);
  //     }
  // };
  // --> a different way of how you can invoke these input handlers, just fyi.

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //is actually a function defined in newexpense attached to the prop 'onsaveexpensedata', here we execute that prop (so that function).
    SetEnteredTitle("");
    SetEnteredAmount("");
    SetEnteredDate("");
  };


  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0,01"
          step="0,01"
          value={enteredAmount}
          onChange={AmountChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={DateChangeHandler}
        ></input>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
