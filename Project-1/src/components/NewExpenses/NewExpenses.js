import React,{useState} from 'react';

import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses= (props) => {
    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);    
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expenses</button>} 
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditing}></ExpenseForm>}
        </div>
    );
}

export default NewExpenses;