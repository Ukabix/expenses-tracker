import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // forces returns array [current stale value of var, updatingFunction]
  const [title, setTitle] = useState(props.title);


  const clickedHandler = () => {
    // pass new value
    setTitle('clicked');
    console.log(title); // this does not update on first pass
  };

  return (
    <Card className='expense-item'>
      {/* pass props to subcomponent */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
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
