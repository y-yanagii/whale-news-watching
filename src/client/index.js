import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

fetch('/api/').then(response => {
  console.log(response);
});

ReactDOM.render(<App/>, document.getElementById('app'));
