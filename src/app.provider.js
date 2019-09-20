import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app.reducer';
import AppComponent from './app.component'

const store = createStore(rootReducer);

const AppProvider = () => {
    return <Provider store={store}><AppComponent/></Provider>
}

export default AppProvider;