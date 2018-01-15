import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Two arguments: (1) root component, (2) where we attempt to render inside dom
ReactDOM.render(<App />, document.querySelector('#root'));
