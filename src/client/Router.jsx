import React from "react";
import { Route, Switch } from "react-router";
import { Start, Articles, ArticleDetail, NotFound } from "./templates";

const Router = () => {
  // (/)?は/があってもなくても可という意味
  // 認証済みしか見せたくない場合Authで囲う
  // Routerで正規表現()?で囲んだ文字列はあってもなくてもマッチ:idは変数扱い
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Start} />
      <Route exact path={"/articles"} component={Articles} />
      <Route exact path={"/articles/:id?"} component={ArticleDetail} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Router;