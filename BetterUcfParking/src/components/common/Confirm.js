import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { Card } from './Card';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <Card style={{ marginLeft: 15, marginRight: 15, borderRadius: 5, shadowOpacity: 0 }}>
                    <CardSection style={cardSectionStyle}>
                        <Text style={textStyle}>{children}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={onAccept}>Yes</Button>
                        <Button onPress={onDecline}>No</Button>
                    </CardSection>
                </Card>
            </View>
        </Modal>
    );
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };