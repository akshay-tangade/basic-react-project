import React,{useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     EnteredTitle: '',
    //     EnteredAmount: '',
    //     EnteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredTitle: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredAmount: event.target.value
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredDate: event.target.value
        // });
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="1" step="0.1" value={enteredAmount} onChange={amountChangeHandler}></input> 
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2018-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <button type="button" onClick={props.stopEditing}>Cancel</button>
                    <button type="submit" onClick={submitHandler}>Add Expenses</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm; 