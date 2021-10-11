import React from 'react';

import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = () => {

    return (
        <div className="new-expense">
            <ExpenseForm></ExpenseForm>
        </div>
    );
}

export default NewExpenses;