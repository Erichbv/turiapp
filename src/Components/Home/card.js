import React from 'react';
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';

const card = (props) => {
  return (
    <Card className={props.class}>
      <GridList>
        {props.children}
      </GridList>
    </Card>
  );
}

export default card;
