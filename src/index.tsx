import React from 'react';
import ReactDOM from 'react-dom';
import RootContext from './providers/Context';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <RootContext>
      <App />
    </RootContext>
  </React.StrictMode>,
  rootElement
);
