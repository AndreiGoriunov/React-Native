import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BASE_BACKGROUND_COLOR, FONT_COLOR_GRAY } from '../Constants';


class SwitchButton extends Component {
    state = { selectedLeft: true };

    renderLeft() {
        if (this.state.selectedLeft) {
            return (
                <View style={styles.leftStyleSelected}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.setState({ selectedLeft: true })}>
                        <Text style={styles.textStyleSelected}>{this.props.textLeft}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.leftStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.setState({ selectedLeft: true })}>
                    <Text style={styles.textStyle}>{this.props.textLeft}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderRight() {
        if (!this.state.selectedLeft) {
            return(
                <View style={styles.rightStyleSelected}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.setState({ selectedLeft: false })}>
                    <Text style={styles.textStyleSelected}>{this.props.textRight}</Text>
                </TouchableOpacity>
            </View>
            );
        }
        return (
            <View style={styles.rightStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.setState({ selectedLeft: false })}>
                    <Text style={styles.textStyle}>{this.props.textRight}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderLeft()}

                {this.renderRight()}
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center'
    },
    leftStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: BASE_BACKGROUND_COLOR,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        borderColor: FONT_COLOR_GRAY,
        borderWidth: 0.5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    leftStyleSelected: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: FONT_COLOR_GRAY,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        borderColor: FONT_COLOR_GRAY,
        borderWidth: 0.5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    rightStyleSelected: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: FONT_COLOR_GRAY,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        borderColor: FONT_COLOR_GRAY,
        borderWidth: 0.5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    rightStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: BASE_BACKGROUND_COLOR,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        borderColor: FONT_COLOR_GRAY,
        borderWidth: 0.5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    buttonStyle: {
        flex: 1,
        padding: 3,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: FONT_COLOR_GRAY,
        alignSelf: 'center'
    },
    textStyleSelected: {
        fontSize: 18,
        color: BASE_BACKGROUND_COLOR,
        alignSelf: 'center'
    }
};

export { SwitchButton };