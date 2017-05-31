import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App className="grid-container" />, document.getElementById('root'));
registerServiceWorker();
