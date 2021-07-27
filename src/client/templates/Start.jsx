import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Whale from '../assets/img/src/whale-sm.jpg';

const useStyles = makeStyles({
  backImage: {
    height: 'calc(100vh)',
    backgroundImage: `url(${Whale})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#464646'
  }
});

const Start = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
        <Typography component="div" >
          
        </Typography>
      </Container>
    </>
  )
}

export default Start;
