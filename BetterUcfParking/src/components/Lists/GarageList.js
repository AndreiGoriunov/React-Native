import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { CardSection, Load } from '../common';
import garages from './GarageData.json';
import { FONT_COLOR_GRAY } from '../Constants';

class GarageList extends Component {

    renderItem = ({ item }) => {
        const { containerStyle, textStyle } = styles;
        return (
            <TouchableOpacity onPress={() => Actions.garage_map({ title: item.title })}>
                <CardSection style={containerStyle}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={textStyle}>{item.title}</Text>
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={textStyle}>{item.available} out of {item.space}</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Load numerator={item.available} denominator={item.space} />
                    </View>
                </CardSection>
            </TouchableOpacity>
        )
    };

    render() {
        //updateList();
        return (
            <FlatList
                data={garages.garages}
                renderItem={this.renderItem}
                keyExtractor={item => item.title}
            />
        );
    }
}

/*async function updateList() {
    let responseText = '';
    try {
        let response = await fetch(
            'http://secure.parking.ucf.edu/GarageCount/',
        );
        responseText = await response.text();
        console.log('RAW VERSION:', response);

    } catch (error) {
        console.error(error);
    }
    console.log('TEXT VERSION: ', responseText);
}*/

const styles = {
    containerStyle: {
        justifyContent: 'flex-start',
        padding: 5,
        paddingTop: 15,
        paddingBottom: 15,
        flexWrap: 'wrap'
    },
    textStyle: {
        fontSize: 18,
        color: FONT_COLOR_GRAY,
        alignSelf: 'center'
    }
}

export default GarageList;