import React from 'react';
import Typography from '@material-ui/core/Typography';

const text = (props) => {
  return (
    <Typography variant={props.variant} component={props.component}>
      {props.text}
    </Typography>
  );
}

export default text;
