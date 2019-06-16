import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import '../Assets/Components/Register/register.css';
import '../Assets/Container/App.css'

const register = (props) => {
  return (
    <div className="App">
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
          className="button"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} className="LoginCheck">
          <FormControlLabel
            control={<Checkbox value="checkedC" />}
            label="recordar contraseña"
            />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          className="RegisterButton">
          REGISTARME
        </Button>
      </Grid>
    </Grid>
  </div>
  );
}

export default register;
