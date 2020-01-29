import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import Overview from './components/OverviewFolder/Overview';
import Favorites from './components/Favorites';
import Help from './components/Help';
import { BASE_YELLOW_COLOR } from './components/Constants';
import GarageMap from './components/OverviewFolder/GarageMap';

class RouterComponent extends Component {

    render() {
        const tabIcon = ({ focused, title }) => {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View
                        style={{
                            backgroundColor: focused ? '#5b5b5b' : '#FFFFFF',
                            height: 4,
                            width: 100,
                            borderRadius: 1,
                            marginBottom: 12
                        }}>
                    </View>
                    <Text
                        style={{
                            color: focused ? '#5b5b5b' : '#919191',
                            fontSize: 15
                        }}>
                        {title}
                    </Text>
                </View>
            );
        }

        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="loginScreen" component={LoginScreen} hideNavBar initial />
                    </Scene>

                    <Scene key="main" tabs hideNavBar>
                        <Scene key="fav" title="Favorites" icon={tabIcon} hideNavBar>
                            <Scene key="favorites" title="Favorites" component={Favorites} />
                        </Scene>

                        <Scene key="home" title="Overview" icon={tabIcon} hideNavBar initial>
                            <Scene key="overview" component={Overview} title="Overview" />
                            <Scene key="garage_map" component={GarageMap} title="Garage mup" />
                        </Scene>

                        <Scene key="help" title="Help" icon={tabIcon} hideNavBar>
                            <Scene key="help_scene" component={Help} title="Help" />
                        </Scene>
                    </Scene>
                </Scene>
            </Router >
        );
    }
};

export default RouterComponent;