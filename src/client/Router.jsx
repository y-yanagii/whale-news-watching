import React from 'react';
import { Router as Routers, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Start } from './templates';

const Router = () => {
  // (/)?は/があってもなくても可という意味
  // 認証済みしか見せたくない場合Authで囲う
  // Routerで正規表現()?で囲んだ文字列はあってもなくてもマッチ:idは変数扱い
  return (
    <Routers history={createBrowserHistory()}>
      <Switch>
        <Route exact path={'(/)?'} component={Start} />
      </Switch>
    </Routers>
  )
}

export default Router;