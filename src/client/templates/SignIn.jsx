import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Whale from "../assets/img/src/whale-sm.jpg";

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
    top: "34%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem"
    },
    color: "#f3f9f9",
    width: "350px",
    border: "solid 1px #7597c1",
    margin: "5% 1.5% -2% 1%",
    padding: "16px",
    backgroundColor: "black"
  }
}))

const SignIn = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
      <Typography component="div">
        <div className={classes.catchphrase}>
          sss
        </div>
      </Typography>
      </Container>
    </>
  );
}

export default SignIn;