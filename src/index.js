import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import './utils/rem';
import './utils/iconfont';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
