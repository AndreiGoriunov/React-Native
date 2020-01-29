import React, { Component } from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
//import { Card, CardSection, Input, Button } from './common';
import CustomHeader from './Header/CustomHeader';
import { BASE_BACKGROUND_COLOR } from './Constants';

class Favorites extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BASE_BACKGROUND_COLOR }}>
                <CustomHeader titleText="Favorites" />

                <Text>
                    Favorites
                </Text>
            </View>
        );
    }
}

export default Favorites;