import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';

import '../Assets/Components/Login/login.css';
import '../Assets/Container/App.css'

class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "ramiro.chavez@turiapp.com",
      password: "ramiro123"
    }
  }

  emailHandler = (event) => {
    this.setState({
        email: event.target.value
    })
  }

  passwordHandler = (event) => {
    this.setState({

        password: event.target.value

    })
  }

  render() {
    return (

      <div className="App">
        <Grid spacing={2} alignItems = "center" container>
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
                className=""
                type="email"
                autoComplete="email"
                margin="normal"
                value = {this.state.email}
                onChange = {this.emailHandler}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-password-input"
              label="Contraseña"
              className=""
              type="password"
              autoComplete="current-password"
              margin="normal"
              value = {this.state.password}
              onChange = {this.passwordHandler}
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
                <Link to="/home">Iniciar Sesion</Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              size="large"
              className="LoginButtonBorder">
                <Link to="/register">Registrar</Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default login;
