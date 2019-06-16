import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const register = (props) => {
  return (
    <Grid
      direction="row"
      spacing={2}>
      <Grid item xs={12}>
        <Typography
          className=""
          variant="h6"
          display="block"
          gutterBottom>
          Crea una cuenta
        </Typography>
        <Typography
          className=""
          variant="h6"
          display="block"
          gutterBottom>
          una cuenta
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-dense"
          label="Nombre"
          className=""
          margin="dense"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-dense"
          label="Apellido"
          className=""
          margin="dense"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-dense"
          label="DNI"
          className=""
          margin="dense"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-dense"
          label="Correo electronico"
          className=""
          margin="dense"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-password-input"
          label="Password"
          className=""
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          className="">
          REGISTARME
        </Button>
      </Grid>
    </Grid>
  );
}

export default register;
