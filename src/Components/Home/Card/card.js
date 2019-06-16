import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';

const card = (props) => {
  return (
    <Card className={props.classCard}>
      <GridListTile key={props.img}>
        <img src={props.img} alt={props.title} />
          <GridListTileBar
            title={props.title}
          />
        </GridListTile>
    </Card>
  );
}

export default card;
