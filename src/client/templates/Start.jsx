import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Whale from '../assets/img/src/whale-sm.jpg';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  // 背景画像設定
  backImage: {
    height: 'calc(100vh)',
    backgroundImage: `url(${Whale})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#284377'
  },
  catchphrase: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    },
    color: '#f3f9f9'
  },
  catchphraseH1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    marginTop: 0,
    marginBottom: '0.5rem',
    fontFamily: 'sans-serif',
    fontWeight: 500,
    lineHeight: 1.2,
    color: 'inherit'
  },
  button: {
    [theme.breakpoints.down('md')]: {
      width: '70%'
    },
    [theme.breakpoints.up('md')]: {
      width: '30%'
    },
    color: '#fff',
    margin: theme.spacing(1),
    fontFamily: 'initial',
  },
}));

const Start = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
        <Typography component="div" >
          <div className={classes.catchphrase}>
            <h1 className={classes.catchphraseH1}>ネットという大海原で</h1>
            <h1 className={classes.catchphraseH1}>ホエールウォッチングをしましょう</h1>
            <div className="module-spacer--medium" />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SearchIcon />}
            >
              Whale Watching Start
            </Button>
          </div>
        </Typography>
      </Container>
    </>
  )
}

export default Start;
