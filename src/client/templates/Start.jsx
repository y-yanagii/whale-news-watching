import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "../reducks/users/selectors";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Whale from "../assets/img/src/whale-sm.jpg";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  // 背景画像設定
  backImage: {
    height: "calc(100vh)",
    backgroundImage: `url(${Whale})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "#284377"
  },
  catchphrase: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem"
    },
    color: "#f3f9f9"
  },
  catchphraseH1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem",
    },
    marginTop: 0,
    marginBottom: "0.5rem",
    fontFamily: "sans-serif",
    fontWeight: 500,
    lineHeight: 1.2,
    color: "inherit"
  },
  button: {
    [theme.breakpoints.down("md")]: {
      width: "70%"
    },
    [theme.breakpoints.up("md")]: {
      width: "30%"
    },
    color: "#fff",
    margin: theme.spacing(1),
    fontFamily: "initial",
  },
}));

const Start = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);

  // 記事一覧orログイン画面へ遷移
  const whaleWatching = () => {
    if (isSignedIn) {
      // ログイン済みの場合記事情報画面へ遷移
      dispatch(push("/articles"));
    } else {
      // ログイン前の場合ログイン画面へ遷移
      dispatch(push("/signin"));
    }
  }

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
              onClick={() => whaleWatching()}
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
