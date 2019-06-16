import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import 'typeface-poppins';

import '../../Assets/Components/Perfil/perfil.css';

const perfil = (props) => {
  return (
    <Grid
      direction="row"
      spacing={2}>
      <Grid item xs={12} container justify="left" alignItems="left">
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="/static/img/avatar.png"
              className="perfilAvatar"/>
          }
          title="Maria Teresa Licito Rodriguez"
          subheader="September 14, 2016"
          align="left"
        />
      </Grid>
      <CardContent>
        <Grid item xs={12} container justify="left" alignItems="left">
          <Typography
            className="perfilTexto"
            variant="caption"
            display="block"
            align="center">
            NIVEL:
          </Typography>
          <Typography
            className=""
            variant="caption"
            display="block"
            align="center">
            Turista
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="left" alignItems="left">
          <Typography
            className="perfilTexto"
            variant="caption"
            display="block"
            align="center">
            PUNTAJE:
          </Typography>
          <Typography
            className=""
            variant="caption"
            display="block"
            align="center">
            500
          </Typography>
        </Grid>
        <Divider style={{backgroundColor: 'rgb(204, 203, 203)'}}/>
        <Grid item xs={12} container justify="left" alignItems="left">
          <Typography
            className="perfilTextoSubtitle"
            variant="subtitle2"
            display="block"
            align="center">
            DESCUBRIMIENTO
          </Typography>
        </Grid>
          <GridList container>
            <Grid xs={1} md={12} direction="row">
              <CardMedia
                  className="perfilCardImagen"
                  image="/static/img/casa1.png"
                  title="Paella dish"
                  component="img"
                />
            </Grid>
            <Grid xs={3} md={12} direction="row">
              <CardMedia
                  className="perfilCardImagen"
                  image="/static/img/casa1.png"
                  title="Paella dish"
                  component="img"
                />
            </Grid>
            <Grid xs={3} md={12} direction="row">
              <CardMedia
                  className="perfilCardImagen"
                  image="/static/img/casa1.png"
                  title="Paella dish"
                  component="img"
                />
            </Grid>
          </GridList>
      </CardContent>
    </Grid>
  );
}

export default perfil;
