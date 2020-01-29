import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyB9tB0WtjWCefl0000BdqT_Naa0V3-F8Po',
                authDomain: 'auth-1fb26.firebaseapp.com',
                databaseURL: 'https://auth-1fb26.firebaseio.com',
                projectId: 'auth-1fb26',
                storageBucket: 'auth-1fb26.appspot.com',
                messagingSenderId: '1080280679934',
                appId: '1:1080280679934:web:d6af38d512f2e5c0'
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{ flex: 1, justyfyContent: 'center'}}>
                        <Spinner />
                    </View>
                );
        }

    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;