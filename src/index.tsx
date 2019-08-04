import App from './components/app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider, themes } from '@stardust-ui/react';

import './index.css';

ReactDOM.render(
  <Provider theme={themes.teams}>
    <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
