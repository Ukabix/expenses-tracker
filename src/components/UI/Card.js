import React from 'react';
import './Card.css';

const  Card = (props) => {
  const classes = 'card ' + props.className;
  // pass classes to className to inherit css classes
  return <div className={classes}>{props.children}</div>
}

export default Card;