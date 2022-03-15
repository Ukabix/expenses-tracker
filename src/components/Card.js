import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className;
  // pass classes to className to inherit css classes
  return <div className={classes}>{props.children}</div>
}

export default Card;