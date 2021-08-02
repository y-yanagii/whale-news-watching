import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import logo from "../../assets/img/icons/logo.png";

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
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <ToolBar className={classes.toolBar}>
          <img
            src={logo} alt="Whale Watching Start" width="128px"
            onClick={() => console.log("ホーム画面へ")}
          />
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header;
