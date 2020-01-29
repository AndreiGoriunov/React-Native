import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FONT_COLOR_GRAY } from '../Constants';

class SubHeader extends Component {
    renderColumns() {
        switch (this.props.colNum) {
            case '1':
                return (
                    <View style={styles.subheaderViewTextStyle}>
                        <Text style={styles.subheaderFont}>{this.props.label1}</Text>
                    </View>);
            case '2':
                return (
                    <View style={styles.subheaderViewTextStyle}>
                        <Text style={styles.subheaderFont}>{this.props.label1}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label2}</Text>
                    </View>
                );
            case '3':
                return (
                    <View style={styles.subheaderViewTextStyle}>
                        <Text style={styles.subheaderFont}>{this.props.label1}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label2}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label3}</Text>
                    </View>
                );
            case '4':
                return (
                    <View style={styles.subheaderViewTextStyle}>
                        <Text style={styles.subheaderFont}>{this.props.label1}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label2}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label3}</Text>
                        <Text style={styles.subheaderFont}>{this.props.label4}</Text>
                    </View>
                );
            default:
                return (
                    <View style={styles.subheaderTextStyle}>
                        <Text>Please specify colNum='1-4' and label1,2,3,4 props</Text>
                    </View>
                );
        }
    }
    render() {
        return (
            <View style={styles.subheaderViewStyle}>
                {this.props.children}
                {this.renderColumns()}
            </View>
        );
    }
}

const styles = {
    subheaderViewStyle: {
        backgroundColor: "#FFFFFF",
        padding: 5,
        borderColor: FONT_COLOR_GRAY,
        borderWidth: 0.5,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        allignItems: 'center'
    },
    subheaderViewTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
        paddingLeft: 0,
        paddingRight: 0
    },
    subheaderFont: {
        fontSize: 18,
        color: FONT_COLOR_GRAY
    },
}
export default SubHeader;