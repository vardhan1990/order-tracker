import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { Provider, themes } from '@stardust-ui/react';

ReactDOM.render(
  <Provider theme={themes.teams}>
    <App />
  </Provider>, document.getElementById('root')
);
  
serviceWorker.unregister();
