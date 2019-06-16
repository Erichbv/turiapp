import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const register = (props) => {
  return (
    <Grid
      direction="row"
      className={props.root}
      spacing={2}>
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
      <Grid item xs={12}>
        <Button
          variant="contained"
          className={props.button}
          size="large">
          Iniciar Sesion
        </Button>
      </Grid>
    </Grid>
  );
}

export default register;
