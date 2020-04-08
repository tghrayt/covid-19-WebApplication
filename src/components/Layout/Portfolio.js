import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../images/ysf.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 250,
    weight: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ait Tghrayt Youssef
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ingénieur en génie logiciel full-stack.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}