import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
    // width: '100%'
  },
  backcontainer: {
    height: '100%',
    backgroundImage: `url(${"/static/images/background.jpg"})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  professionChip: {
    backgroundColor: 'transparent',
    borderWidth: '3px',
    borderColor: '#ffffff'
  },
  professionText: {
    justifySelf: 'center',
    margin: theme.spacing(1),
    color: '#ffffff'
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  iconBtn: {
    fontSize: theme.spacing(4),
    color: '#82e9de'
  },
  downBtn:{
    backgroundColor: '#82e9de'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.backcontainer}>
      <Backdrop className={classes.backdrop} open={true}>
        <Box className={classes.root}>
          <Avatar src="/static/avatar/avatar.jpg" className={classes.large} />
          <Typography variant="h4" gutterBottom>I'M ISAAC LEE,</Typography>
          <Paper variant="outlined" square className={classes.professionChip}>
            <Typography variant="h5" gutterBottom className={classes.professionText}>DEVELOPER</Typography>
          </Paper>
          <Box className={classes.socialMediaContainer}>
            <IconButton aria-label="linkedIn">
              <LinkedInIcon className={classes.iconBtn} />
            </IconButton>
            <IconButton aria-label="linkedIn">
              <GitHubIcon className={classes.iconBtn} />
            </IconButton>
            <IconButton aria-label="linkedIn">
              <EmailIcon className={classes.iconBtn} />
            </IconButton>
          </Box>
          <Button variant="contained" className={classes.downBtn} disableElevation>
            Download CV
          </Button>
        </Box>
      </Backdrop>
    </Paper>
  );
}

export default HomePage;