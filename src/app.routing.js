import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppLoading from '@app/screens/app-loading/app-loading.component';
import HomeScreen from '@app/screens/home/home.component'


const AuthedStack = createStackNavigator({
    Home: HomeScreen
}, {
    headerMode:'none'
})
const RoutingComp = createSwitchNavigator({
    appLoading: AppLoading,
    authed: AuthedStack
},{
    initialRouteName: 'appLoading',
})
export default createAppContainer(RoutingComp)
