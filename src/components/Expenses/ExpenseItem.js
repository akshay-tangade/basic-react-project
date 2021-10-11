import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'


const ExpenseItem = (props) => {

    const[title, setTitle] = useState(props.title);

    const clickHandle = () => {
        setTitle("Updated!!!!");
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandle}>Change Item</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;