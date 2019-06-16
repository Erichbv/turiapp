import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';

import '../Assets/Components/Register/register.css';
import '../Assets/Container/App.css'

class register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Ramiro",
      lastName: "Chavez",
      dni: "9876542",
      email: "ramiro.chavez@turiapp.com",
      password: "ramiro123"
    }
  }

  nameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  dniHandler = (event) => {
    this.setState({
      dni: event.target.value
    })
  }

  emailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  passwordLastHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <Grid container
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
            value = {this.state.name}
            onChange = {this.nameHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-dense"
            label="Apellido"
            className=""
            margin="dense"
            value = {this.state.lastName}
            onChange = {this.lastNameHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-dense"
            label="DNI"
            className=""
            margin="dense"
            type = "number"
            value = {this.state.dni}
            onChange = {this.dniHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-dense"
            label="Correo electronico"
            className=""
            margin="dense"
            value = {this.state.email}
            onChange = {this.emailHandler}
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
          <Link to="/home">
            <Button
              variant="contained"
              color="primary"
              className="RegisterButton">
              REGISTARME
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
    );
  }

}

export default register;
