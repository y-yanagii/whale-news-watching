import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Whale from "../assets/img/src/whale-sm.jpg";
import { TextInputOutline } from "../components/Uikit";
import Button from "@material-ui/core/Button";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

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
      fontSize: "3rem",
      width: "50%",
      maxWidth: "500px",
      minWidth: "450px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    color: "#f3f9f9",
    width: "350px",
    border: "solid 1px #7597c1",
    margin: "5% 1.5% -2% 1%",
    padding: "16px",
    backgroundColor: "black"
  },
  title: {
    color: "#7597c1",
    fontSize: "1.563rem",
    margin: "0 auto 1rem auto",
    textAlign: "center"
  },
  button: {
    color: "#fff",
    margin: theme.spacing(1),
    fontFamily: "initial",
  },
  signupGuide: {
    cursor: "pointer",
    fontSize: "1rem",
    color: "#7597c1",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}))

const SignIn = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");
  
  // useCallback
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, [setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value);
  }, [setPassword]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
      <Typography component="div">
        <div className={classes.catchphrase}>
          <div>
            <h2 className={classes.title}>Sign In</h2>
          </div>
          <TextInputOutline
            fullWidth={true} label={"Email"} multiline={false} required={true}
            rows={1} value={email} type={"email"} onChange={inputEmail}
          />
          <TextInputOutline
            fullWidth={true} label={"password"} multiline={false} required={true}
            rows={1} value={password} type={"password"} onChange={inputPassword}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<DoubleArrowIcon />}
            href={"/articles"}
          >
            Sign In
          </Button>
          <p className={classes.signupGuide} onClick={() => dispatch(push("/signup"))}>アカウントをお持ちでない方はこちら</p>
        </div>
      </Typography>
      </Container>
    </>
  );
}

export default SignIn;