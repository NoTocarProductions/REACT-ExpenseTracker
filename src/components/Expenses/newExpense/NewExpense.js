import React, {useState} from "react";
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

  const[isEditing, isEditingHandler] =  useState(false);


  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    isEditingHandler(false);
  }

  const startEditingHandler = () => {
    isEditingHandler(true);
  }

  const stopEditingHandler = () => {
    isEditingHandler(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
