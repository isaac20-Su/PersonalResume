import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  backcontainer: {
    height: '100%',
    backgroundImage: `url(${"/static/background.jpg"})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.backcontainer}>

    </Paper>
  );
}

export default HomePage;