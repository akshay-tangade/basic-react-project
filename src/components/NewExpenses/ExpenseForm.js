import React,{useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = () =>{

    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');

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

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label >Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler}></input> 
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <button type="submit">Add Expenses</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm; 