import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const gridList = (props) => {
  return (
    props.inmuebles.map(inmueble => (
      <GridListTile key={inmueble.img} cols={1}>
        <img src={inmueble.img} alt={inmueble.name} />
        <GridListTileBar
          title={inmueble.name}
        />
      </GridListTile>
    ))
  );
}
export default gridList;
