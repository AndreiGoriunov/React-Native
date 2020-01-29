import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyA9F5VHhdwR0_xWyG9GcWRXCEm9aHbeq5M',
            authDomain: 'manager-90241.firebaseapp.com',
            databaseURL: 'https://manager-90241.firebaseio.com',
            projectId: 'manager-90241',
            storageBucket: 'manager-90241.appspot.com',
            messagingSenderId: '568934618425',
            appId: '1:568934618425:web:8f9b9a49bf4f4b25'
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App; 