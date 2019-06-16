import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const card = (props) => {
  return (
    <Card className={props.classCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height= {props.heightImg}
          alt= {props.altImg}
          className={props.classMedia}
          image={props.img}
          title={props.titleImg}
        />
        holi
      </CardActionArea>
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default card;
