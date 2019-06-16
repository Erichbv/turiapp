import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import '../Assets/Components/Login/login.css';

const login = (props) => {
  return (
    <Grid spacing={2} alignItems="center" Container>
      <Grid item xs={12}>
        <Typography
          className=""
          variant="h6"
          display="block"
          gutterBottom>
          Ingresa
        </Typography>
        <Typography
          variant="h6"
          display="block"
          gutterBottom>
          con tu cuenta
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
            id="standard-email-input"
            label="Correo electronico"
            className={props.textField}
            type="email"
            autoComplete="email"
            margin="normal"
          />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="standard-password-input"
          label="Contraseña"
          className={props.textField}
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
          className="LoginButton"
          size="large">
          Iniciar Sesion
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          size="large"
          className="LoginButtonBorder">
          Registrar
        </Button>
      </Grid>
    </Grid>
  );
}

export default login;
