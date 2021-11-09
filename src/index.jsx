import React from 'react';
import ReactDOM from 'react-dom';
import './i18next';
import App from './core/App/App';
import Launcher from './core/Launcher/Launcher';
import './index.scss';

ReactDOM.render(
  <Launcher>
    <App />
  </Launcher>,
  document.getElementById('root'),
);
