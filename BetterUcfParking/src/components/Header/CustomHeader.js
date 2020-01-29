import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchField from './SearchField';
import { Actions } from 'react-native-router-flux';

class CustomHeader extends Component {
    renderSearchField() {
        if (this.props.showSearchField) {
            return (
                <SearchField />
            );
        }
    }

    renderBackButton() {
        if (this.props.renderBackButton) {
            return (
                <TouchableOpacity style={styles.backButtonStyle} onPress={() => Actions.pop()}>
                    <Text style={{ fontSize: 20, color: "#000000", alignSelft: 'center' }}>{'< Back'}</Text>
                </TouchableOpacity >
            );
        }
    }

    render() {
        return (
            <View>
                <View style={styles.headerStyle}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>{this.renderBackButton()}</View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.titleStyle}>{this.props.titleText}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                {this.renderSearchField()}
            </View>
        );
    }
}

const styles = {
    headerStyle: {
        backgroundColor: '#FFD801',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 85,
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    titleStyle: {
        fontSize: 20,
        color: "#000000"
    },
    backButtonStyle: {
        height: 22,
        width: 70,
        justifyContent: 'center',
        marginLeft: 10
    }
}
export default CustomHeader;