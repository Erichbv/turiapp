import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const gridList = (props) => {
  return (
    props.users.map(user => (
      <GridListTile key={user.img}>
        <img src={user.img} alt={user.name} className="homeImagen"/>
          <GridListTileBar
            title={user.name}
          />
      </GridListTile>
    ))
  );
}
export default gridList;
