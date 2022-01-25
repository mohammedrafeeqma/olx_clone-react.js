import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FireBaseContext} from './store/Context'
import Context from './store/Context';
import firebase from './firebase/config'


ReactDOM.render(
    <FireBaseContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
    

    </FireBaseContext.Provider>
    
    , document.getElementById('root'));
