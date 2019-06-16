import React from 'react';

const header = (props) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={props.class}></Paper>
      </Grid>
    </Grid>
  );
}

export default header;
