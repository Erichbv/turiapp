import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import 'typeface-poppins';

import Avatar from '../Components/Perfil/avatar';
import AvatarContent from '../Components/Perfil/avatarContent';
import GirdList from '../Components/Perfil/gridList';
import Card from '../Components/Perfil/card';

import '../Assets/Components/Perfil/perfil.css';

class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inmueble: [{id: 1, name: "BANCO AGRARIO", img: "/static/img/casa1.png", colaboracion: "Agrego reseña historica"},
      {id: 2, name: "JARDIN BOTANICO", img: "/static/img/casa2.png", colaboracion: "Agrego fotos"}]
    }
  }

  render () {
    return (
      <Grid container spacing={0} >
        <Grid item xs={3} className="perfilAvatar">
          <Avatar alt ="avatar" url = "/static/img/avatar.png"/>
        </Grid>
        <Grid item xs={4} className="perfilTextoSubtitle">
            <AvatarContent text1 = "Nivel" text2 = "Turista" />
        </Grid>
        <Grid item xs={4} className="perfilTextoSubtitle">
          <AvatarContent text1 = "Puntuaje" text2 = "200"/>
        </Grid>
        <Divider style={{backgroundColor: 'rgb(204, 203, 203)'}}/>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              display="block"
              align="center">
              HISTORIAL
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Card>
              <GirdList inmuebles = {this.state.inmueble} />
            </Card>
          </Grid>
      </Grid>
    );
  }
}

export default Perfil;
