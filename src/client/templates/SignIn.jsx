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
import { signIn } from "../reducks/users/operations";
import Collapse from "@material-ui/core/Collapse";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

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

  const [inputErrorEmail, setInputErrorEmail] = useState(false),
        [inputErrorPassword, setInputErrorPassword] = useState(false);

  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  });
  
  // useCallback
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
    handleChange(inputEmailRef, setInputErrorEmail);
  }, [setEmail]);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value);
    handleChange(inputPasswordRef, setInputErrorPassword);
  }, [setPassword]);

  // バリデーションチェック
  const handleChange = (inputRef, setInputError) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if  (!ref.validity.valid) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
  }

  // ログイン処理
  const login = async () => {
    // 入力項目のバリデーションチェック
    handleChange(inputEmailRef, setInputErrorEmail);
    handleChange(inputPasswordRef, setInputErrorPassword);

    if (!inputEmailRef.current.validity.valid || !inputPasswordRef.current.validity.valid) {
      // 一つでもバリデーションチェックに引っかかる場合処理を止める
      return false;
    }

    // ログイン処理
    const url = "/api/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    }).then(async (res) => {
      const resData = await res.json();
      console.log(resData);
      if (res.ok) {
        // ログイン情報を保持する
        dispatch(signIn(resData.username, resData.email));
      } else if (res.status === 400) {
        // ログインに失敗した旨をフラッシュメッセージで表示
        setOpen(true);
        setOpenMsg(resData.msg);
      } else if (res.status === 500) {
        // サーバエラー画面に遷移
        throw new Error(`${res.status} ${res.statusText}`);
      }
    }).catch((err) => {
      console.log(err);
      throw err;
    });
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.backImage}>
        <Typography component="div">
          <div className={classes.catchphrase}>
            <div>
              <h2 className={classes.title}>Sign In</h2>
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
              fullWidth={true} label={"Email"} multiline={false} required={true}
              rows={1} value={email} type={"email"} onChange={inputEmail} inputProps={{ required: true }}
              inputRef={inputEmailRef} inputError={inputErrorEmail}
            />
            <TextInputOutline
              fullWidth={true} label={"password"} multiline={false} required={true}
              rows={1} value={password} type={"password"} onChange={inputPassword} inputProps={{ required: true }}
              inputRef={inputPasswordRef} inputError={inputErrorPassword}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<DoubleArrowIcon />}
              onClick={() => login()}
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