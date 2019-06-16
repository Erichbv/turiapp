import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const avatar = (props) => {
  return (
    <CardHeader
      avatar={
        <Avatar
          alt={props.alt}
          src={props.url}
          className={props.class}/>
      }
      title={props.title}
      subheader={props.date}
      align="left"
    />
  );
}

export default avatar;
