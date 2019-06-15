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
          className={props.classMedia}
          image={props.img}
          title={props.title}
        />
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
