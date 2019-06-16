import React from 'react';
import Button from '@material-ui/core/Button';

const button = (props) => {
  return (
    <Button color={props.color} className={props.class}>
      {props.text}
    </Button>
  );
}

export default button;
