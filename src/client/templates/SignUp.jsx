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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import MuiAlert from "@material-ui/lab/Alert";
import { signUp } from "../reducks/users/operations";

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
    borderRadius: "5px",
    margin: "150px 1.5% -2% 1%",
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
  },
  snackBar: {
    backgroundColor: "rgb(211, 47, 47)"
  }
}));

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

  // reduxのユーザ登録処理呼び出し
  const createUser = async () => {
    // パスワードと確認用パスワードの一致であることのバリデーションチェック
    if (password !== passwordConfirmation) {
      setOpenMsg("パスワードと確認用パスワードが一致しません!");
      setOpen(true); // パスワード不一致アラートを表示
      return false;
    }

    // 入力項目のバリデーションチェック
    handleChange(inputNameRef, setInputErrorName);
    handleChange(inputEmailRef, setInputErrorEmail);
    handleChange(inputPasswordRef, setInputErrorPassword);
    handleChange(inputPasswordConfirmationRef, setInputErrorPasswordConfirmation);

    if (!inputNameRef.current.validity.valid
      || !inputEmailRef.current.validity.valid
      || !inputPasswordRef.current.validity.valid
      || !inputPasswordConfirmationRef.current.validity.valid) { 
        // 一つでもバリデーションチェックに引っかかる場合処理を止める
        return false;
    }

    // ユーザ登録処理
    const res = await dispatch(signUp(name, email, password, passwordConfirmation));
debugger;
    if (typeof res !== "undefined" && res.status === 400) {
      setOpen(true);
      setOpenMsg(res.msg);
      return false;
    }
  };

  // BadRequestやパスワード確認との不一致用アラート
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
      <Typography component="div">
        <div className={classes.catchphrase}>
          <div>
            <h2 className={classes.title}>Sign Up</h2>
          </div>
          {/* アラート表示 */}
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {openMsg}
            </Alert>
          </Collapse>
          <div className="module-spacer--small" />

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
            onClick={() => createUser()}
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