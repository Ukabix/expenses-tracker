import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickedHandler = () => {
    console.log('Clicked!!!');
  };
  return (
    <Card className='expense-item'>
      {/* pass props to subcomponent */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>
          ${props.amount}
        </div>
      </div>
      {/* special prop to fire eventlistener - put js expression or f ponmiter here {} */}
      <button onClick={clickedHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
