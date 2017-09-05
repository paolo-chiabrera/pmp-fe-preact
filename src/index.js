import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import './style/index.scss';

import App from './components/app';

import store from './store';

function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

render(<Wrapper />, document.body);
