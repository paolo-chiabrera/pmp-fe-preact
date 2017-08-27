import { Provider } from 'preact-redux';

import './style';

import App from './components/app';

import store from './store';

export default function Wrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
