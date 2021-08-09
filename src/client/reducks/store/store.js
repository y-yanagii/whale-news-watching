import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export default function createStore(history) {
  // combineReducersに定義したReducerをここで設定
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history), // historyが持っている情報（現在のパスとか）
    }),
    applyMiddleware( // 扱うミドルウェアをここで引数として渡す
      routerMiddleware(history),
      thunk
    )
  )
}