import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme";
import App from "./App";

fetch("/api/").then(res => {
  console.log(res);
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>,
  document.getElementById("app")
);
