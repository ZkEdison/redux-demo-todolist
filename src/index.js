import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {devToolsEnhancer} from 'redux-devtools-extension'
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  todoApp,
  devToolsEnhancer()
)

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
