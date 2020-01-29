import React from 'react';
import { View } from 'react-native';
import { BASE_YELLOW_COLOR, FONT_COLOR_GRAY } from '../Constants';
import { Input } from '../common';

const SearchField = () => {
    const { searchFieldStyle, backgroundStyle, textInputStyle } = styles;

    return (
        <View style={backgroundStyle}>
            <View style={searchFieldStyle}>
                <Input overLabelStyle={{flex:0}} overInputStyle={textInputStyle} placeholder="Building, Classroom, etc..."/>
            </View>
        </View>
    );
};

const styles = {
    searchFieldStyle: {
        backgroundColor: "#FFFFFF",
        marginLeft: 50,
        marginRight: 50,
        height: 28,
        borderRadius: 30,
    },
    backgroundStyle: {
        backgroundColor: BASE_YELLOW_COLOR,
        paddingBottom: 3,
        paddingTop: 3
    },
    textInputStyle: {
        color: FONT_COLOR_GRAY
    }
};

export default SearchField;