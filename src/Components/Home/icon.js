import React from 'react';
import Icon from '@material-ui/core/Icon';

const icon = (props) => {
  return (
      <Icon className={props.class} color={props.color}>
        {props.name}
      </Icon>
  );
}

export default icon;
