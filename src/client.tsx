import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from './components/CountUp';

// エントリポイントの作成
// SSRでないReactアプリはrender()を使用してUIを描画するが、SSRを使用してサーバ
// で描画されている場合はhydrate()を使用し、サーバで描画した部分をブラウザで再描画しないようにします。
// idがappの部分をhydrateで描画する
hydrate(<CountUp />, document.querySelector('#app'));
