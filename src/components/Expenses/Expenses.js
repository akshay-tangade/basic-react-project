import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
    }

    const filteredItems = props.items.filter((expense) => {
        return (expense.date.getFullYear().toString() === filteredYear);
    })

return (
    <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            <ExpenseList items={filteredItems}></ExpenseList>;
        </Card>
    </div>
);

}

export default Expenses;