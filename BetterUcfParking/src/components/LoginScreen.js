import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, LayoutAnimation } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from './common';

class LoginScreen extends Component {
    componentWillUnmount() {
        LayoutAnimation.linear();
    }

    onLoginPress() {
        //Firebase logic
        Actions.replace('main');
    }

    render() {
        return (
            <ImageBackground
                source={require('./images/LoginBackground.png')}
                style={styles.backgroundImageStyle}>

                <Image
                    source={require('./images/Logo.png')}
                    style={styles.logoStyle}
                />
                <View>
                    <CardSection style={styles.cardSectionStyle}>
                        <Input overLabelStyle={styles.overLabelStyle} placeholder="NID" />
                    </CardSection>

                    <CardSection style={styles.cardSectionStyle}>
                        <Input overLabelStyle={styles.overLabelStyle} placeholder="Password" />
                    </CardSection>

                    <View style={styles.buttonSectionStyle}>
                        <Button
                            overButtonStyle={styles.buttonStyle}
                            overTextStyle={styles.textStyle}
                            onPress={this.onLoginPress.bind(this)}
                        >
                            Login
                        </Button>
                    </View>



                    <View style={{ marginTop: 10, marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ borderColor: '#FFF', borderWidth: 2, height: 18, width: 18 }} />
                        <Text style={{ color: '#FFF', fontSize: 17 }}>
                            Remember me
                        </Text>

                        <Text style={{ color: '#FFF', fontSize: 17 }}>
                            Forgot password?
                        </Text>
                    </View>



                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    backgroundImageStyle: {
        width: '100%',
        height: '100%'
    },
    logoStyle: {
        alignSelf: 'center',
        height: 202,
        width: 150,
        marginTop: 150,
        marginBottom: 50
    },
    cardSectionStyle: {
        borderRadius: 30,
        marginLeft: 40,
        marginRight: 40,
        opacity: 0.9,
        padding: 1,
        marginTop: 20
    },
    buttonSectionStyle: {
        borderRadius: 30,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 30,
        padding: 1,
        height: 44
    },
    buttonStyle: {
        backgroundColor: '#35ce3a',
        borderRadius: 30,
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        borderWidth: 0
    },
    textStyle: {
        color: '#fff'
    },
    overLabelStyle: {
        flex: 0
    }
}

export default LoginScreen;