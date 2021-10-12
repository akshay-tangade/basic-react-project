import React from 'react';

import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses= (props) => {

    const saveExpenseDaataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDaataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpenses;