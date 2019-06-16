import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import Card from '../Components/Home/card';
import Button from '../Components/Home/button';
import Label from '../Components/Home/label';
import Toolbar from '@material-ui/core/Toolbar';
import GridList from '../Components/Home/gridList';
import Tab from '../Components/Home/tab';
import 'typeface-poppins';

import '../Assets/Container/Home/home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topUser: [{name: "Ramiro", img: "static/img/house.jpg", point: 200, level: "Guia"},
      {name: "Pedro", img: "static/img/house.jpg", point: 100, level: "Turista"},
      {name: "Teresa", img: "static/img/house.jpg", point: 300, level: "Descubridor"},
      {name: "Ivan", img: "static/img/house.jpg", point: 500, level: "Astronauta"}]
    }
  }

  render () {
    return (
        <Grid>
          <AppBar xs={12} position="fixed" className="homeNavbar">
            <Toolbar>
              <Grid item xs={9} md={10} className="homeText">
                <Label text = "Usuarios destacados"/>
              </Grid>
              <Grid item xs={2} md={2}>
                <Button color ="primary" class = "" text = "Ingresar"/>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid item xs={12} >
            <Card class = "card" >
              <GridList users = {this.state.topUser} />
            </Card>
          </Grid>
          <Grid item xs={12} className="tabsNavegacion">
            <Tab className="centroTabs"/>
          </Grid>
        </Grid>
    );
  }

}

export default Home;
