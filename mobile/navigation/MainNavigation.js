import React from 'react';
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer,
    DrawerItems
  } from 'react-navigation';

const MainDrawerNavigator = createDrawerNavigator({
    
});

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
});

export default createAppContainer(MainNavigator);