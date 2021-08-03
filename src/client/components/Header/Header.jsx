import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import logo from "../../assets/img/icons/logo.png";
import { HeaderMenus } from "./index";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColr: "#fff",
    color: "white",
    backgroundColor: "black",
    border: "solid 1px #7597c1",
    borderRadius: "6px"
  },
  toolBar: {
    width: "100%",
    "& > img": {
      margin: "0 auto 0 0",
      cursor: "pointer"
    }
  },
  iconButtons: {
    margin: "0 3% 0 auto"
  }
});

const Header = () => {
  const classes = useStyles();

  const isSignedIn = true;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <ToolBar className={classes.toolBar}>
          <img
            src={logo} alt="Whale News Watching" width="128px"
            onClick={() => console.log("ホーム画面へ")}
          />
          {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenus />
            </div>
          )}
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header;
