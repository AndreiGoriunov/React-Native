import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { SwitchButton } from '../common';
import CustomHeader from '../Header/CustomHeader';
import SubHeader from '../Header/SubHeader';
import { BASE_BACKGROUND_COLOR, FONT_COLOR_GRAY } from '../Constants';
import GarageList from '../Lists/GarageList';

class Overview extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BASE_BACKGROUND_COLOR }}>
                <CustomHeader titleText="Overview" showSearchField />

                <SubHeader colNum='3' label1="Garage" label2="Spaces Available" label3="Load" >
                    <SwitchButton textLeft="Garages" textRight="Parking Lots" />
                </SubHeader>

                <GarageList />
            </View>
        );
    }
}

const styles = {
    empty: {

    }
}

export default Overview;