import React, { Component } from 'react';
import { View } from 'react-native';
import Router from './Router';

class App extends Component {
    state = { loggedIn: false }

    render() {
        return (
            <Router />
        );
    };

}

export default App;