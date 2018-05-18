import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 引入redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/index.css';
import './utils/rem';
import './utils/iconfont';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
