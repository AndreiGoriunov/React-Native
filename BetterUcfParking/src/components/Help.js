import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import {Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from './common';
import CustomHeader from './Header/CustomHeader';
import { BASE_BACKGROUND_COLOR } from './Constants';
import { FONT_COLOR_GRAY } from './Constants';

class Help extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BASE_BACKGROUND_COLOR }}>
                <CustomHeader titleText="Help" />

                <Card>
                    <TouchableOpacity onPress={() => Actions.reset('auth')}>
                        <CardSection>
                            <Text style={{ fontSize: 18, color: FONT_COLOR_GRAY }}>Logout</Text>
                        </CardSection>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default Help;