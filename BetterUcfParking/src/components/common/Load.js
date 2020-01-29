import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Load extends Component {
    state = {
        up: this.props.denominator - this.props.numerator,
        down: this.props.denominator
    }

    setColor() {
        let num = Math.round((this.state.up * 100) / this.state.down);

        if (num <= 50) {
            return `rgb(${Math.round(0 + num * 230 / 50)}, ${230}, ${0})`;
        }
        else if (50 < num < 100) {
            return `rgb(${230}, ${Math.round(230 - num * 230 / 140)}, ${0})`;
        }
        return null;
    }

    barStyle() {
        let num = Math.round((this.state.up * 100) / this.state.down);

        if (num === 100) {
            return {
                flex: 1,
                borderRadius: 20,
                backgroundColor: 'rgb(230, 0 , 0)',
            }
        }
        return {
            flex: num,
            borderRadius: 20,
            backgroundColor: this.setColor(),
            borderBottomRightRadius: 4,
            borderTopRightRadius: 4,
        }
    }

    setTextStyle() {
        let num = Math.round((this.state.up * 100) / this.state.down);

        if (num < 77) {
            return {
                fontSize: 15,
                color: '#3A3A3A'
            }
        }
        else {
            return {
                fontSize: 15,
                color: '#ffffff'
            }
        }
    }

    emptySpaceStyle() {
        let num = Math.round((this.state.up * 100) / this.state.down);
        let den = 100 - num;
        if (num === 100) {
            return {
                flex: 0
            }
        }
        return {
            flex: den
        }
    }

    /*setStyle(type) {
        let num = Math.round((this.state.up * 100) / this.state.down);

        switch (type) {
            case bar: //colorBarStyle
                if (num === 100) {
                    return {
                        flex: 1,
                        borderRadius: 20,
                        backgroundColor: 'rgb(230, 0 , 0)',
                    }
                }
                return {
                    flex: num,
                    borderRadius: 20,
                    backgroundColor: this.setColor(),
                    borderBottomRightRadius: 4,
                    borderTopRightRadius: 4,
                }
            case empty: //opposity of color Bar. Takes up space with flex
                let den = 100 - num;
                console.log(`Num: ${num}`);
                console.log(`Den: ${den}`);
                if (num === 100) return { flex: 0 }
                return { flex: den }
            case text:
                if (num < 77) {
                    return {
                        fontSize: 15,
                        color: '#3A3A3A'
                    }
                }
                return {
                    fontSize: 15,
                    color: '#e0e0e0'
                }
            default:
                return null;
        }
    }*/

    renderBar() {
        const { containerStyle, textContainerStyle, textStyle } = styles;
        let num = Math.round((this.state.up * 100) / this.state.down);
        return (
            <View style={containerStyle}>
                <View style={textContainerStyle}>
                    <Text style={textStyle} >{num}%</Text>
                </View>
                <View style={this.barStyle()}></View>
                <View style={this.emptySpaceStyle()}></View>
            </View>
        );
    }

    render() {
        return (
            this.renderBar()
        )
    }
}

const styles = {
    containerStyle:
    {
        height: 30,
        width: 70,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#5A5A5A',
        borderRadius: 20,
        padding: 2,
        flexDirection: 'row'
    },
    textContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        width: 60,
        zIndex: 1
    },
    textStyle: {
        fontSize: 15,
        color: '#3A3A3A'
    }
}

export { Load };