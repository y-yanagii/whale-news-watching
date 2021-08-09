import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { ConnectedRouter } from "connected-react-router";
import * as History from "history";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme";
import App from "./App";

const history = History.createBrowserHistory(); // reduxのミドルウェアで現在のパス情報などを持つ
export const store = createStore(history); // Reduxのstoreが作成され、Providerタグでラップしてstoreという名でpropsとして渡す

// Provider store={store}で全コンポーネントでstore参照、更新ができる
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
