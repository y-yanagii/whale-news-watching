import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import logo from "../../assets/img/icons/logo.png";
import { HeaderMenus, HeaderTabs, HeaderSearch } from "./index";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { getIsSignedIn } from "../../reducks/users/selectors";
import { push } from "connected-react-router";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    color: "white",
    backgroundColor: "#1b1b1b",
    border: "solid 1px #7597c1",
    borderRadius: "6px"
  },
  toolBar: {
    width: "100%",
    "& > img": {
      margin: "0 1% 0 0",
      cursor: "pointer"
    }
  },
  tabs: {
    margin: "auto"
  },
  iconButtons: {
    margin: "0 3% 0 auto"
  },
  loginIcon: {
    color: "#7597c1",
  },
});

const Header = () => {
  const classes = useStyles();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <ToolBar className={classes.toolBar}>
          <img
            src={logo} alt="Whale News Watching" width="128px"
            onClick={() => console.log("ホーム画面へ")}
          />
          <div>
            <HeaderSearch />
          </div>
          <div className={classes.tabs}>
            <HeaderTabs />
          </div>
            <div className={classes.iconButtons}>
              {isSignedIn && (
                <HeaderMenus />
              )}
              {!isSignedIn && (
                <IconButton className={classes.loginIcon} onClick={() => dispatch(push("/signin"))}>
                  <AccountCircleIcon />
                </IconButton>
              )}
            </div>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header;
