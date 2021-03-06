import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import {Provider}  from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import Reducers from './Reducers';
import ReduxThunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(
    Reducers, 
    composeEnhancers(applyMiddleware(ReduxThunk))
    );

ReactDOM.render(
<Provider store= {store}>
<App/>
</Provider>,
document.querySelector('#root')
);