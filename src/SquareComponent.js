import React from 'react';

const SquareComponent = (props)=> {
    // const classes = (props.className ? `${props.className} square` : `square`)
    // var age =19;
    // (age=>20) ? console.log('can drive') : console.log('you cannot');
    const classes=(props.className ? `${props.className} square` : `square`)

  return (
    <span className={classes} onClick={props.onClick}>
         {props.state}
    </span>
  );
}

export default SquareComponent;
