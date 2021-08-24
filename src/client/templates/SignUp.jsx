import React, { useRef, useCallback, useState } from "react";
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
    margin: "10% 1.5% -2% 1%",
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
  signinGuide: {
    cursor: "pointer",
    fontSize: "1rem",
    color: "#7597c1",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}))

const SignUp = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [passwordConfirmation, setPasswordConfirmation] = useState("");
        const [inputErrorName, setInputErrorName] = useState(false),
              [inputErrorEmail, setInputErrorEmail] = useState(false),
              [inputErrorPassword, setInputErrorPassword] = useState(false),
              [inputErrorPasswordConfirmation, setInputErrorPasswordConfirmation] = useState(false);

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputPasswordConfirmationRef = useRef(null);

  // useCallback
  const inputName = useCallback((event) => {
    setName(event.target.value);
    handleChange(inputNameRef, setInputErrorName);
  }, [setName]);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
    handleChange(inputEmailRef, setInputErrorEmail);
  }, [setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value);
    handleChange(inputPasswordRef, setInputErrorPassword);
  }, [setPassword]);

  const inputPasswordConfirmation = useCallback((event) => {
    setPasswordConfirmation(event.target.value);
    handleChange(inputPasswordConfirmationRef, setInputErrorPasswordConfirmation);
  }, [setPasswordConfirmation]);

  // バリデーションチェック
  const handleChange = (inputRef, setInputError) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
      <Typography component="div">
        <div className={classes.catchphrase}>
          <div>
            <h2 className={classes.title}>Sign Up</h2>
          </div>
          <TextInputOutline
            fullWidth={true} label={"Name"} multiline={false} required={true}
            rows={1} value={name} type={"name"} onChange={inputName} inputProps={{ maxLength: 30, required: true }}
            inputRef={inputNameRef} inputError={inputErrorName}
          />
          <TextInputOutline
            fullWidth={true} label={"Email"} multiline={false} required={true}
            rows={1} value={email} type={"email"} onChange={inputEmail} inputProps={{ minLength: 3, maxLength: 200, required: true }}
            inputRef={inputEmailRef} inputError={inputErrorEmail}
          />
          <TextInputOutline
            fullWidth={true} label={"password"} multiline={false} required={true}
            rows={1} value={password} type={"password"} onChange={inputPassword} inputProps={{ minLength: 6, maxLength: 30, required: true }}
            inputRef={inputPasswordRef} inputError={inputErrorPassword}
          />
          <TextInputOutline
            fullWidth={true} label={"password confirmation"} multiline={false} required={true}
            rows={1} value={passwordConfirmation} type={"password"} onChange={inputPasswordConfirmation}
            inputRef={inputPasswordConfirmationRef} inputError={inputErrorPasswordConfirmation} inputProps={{ minLength: 6, maxLength: 30, required: true }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<DoubleArrowIcon />}
          >
            Sign Up
          </Button>
          <p className={classes.signinGuide} onClick={() => dispatch(push("/signin"))}>アカウントをお持ちの方はこちら</p>
        </div>
      </Typography>
      </Container>
    </>
  );
}

export default SignUp;