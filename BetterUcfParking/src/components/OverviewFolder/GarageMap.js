import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SubHeader from '../Header/SubHeader';
import CustomHeader from '../Header/CustomHeader';
import { BASE_BACKGROUND_COLOR } from '../Constants';
import MapView from 'react-native-maps';

class GarageMap extends Component {
    render() {
        const { mapContainerStyle } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: BASE_BACKGROUND_COLOR }}>
                <CustomHeader titleText={`Garage ${this.props.title}`} renderBackButton />
                <SubHeader colNum='1' label1='Map' />
                <View style={mapContainerStyle}>
                    
                </View>
            </View >
        );
    }
}

const styles = {
    mapContainerStyle: {
        flex: 1,
        margin: 10,
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    }
}

export default GarageMap;