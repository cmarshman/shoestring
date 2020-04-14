import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'native-base';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import NotificationsPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import HamburgerPhoto from '../../images/Logos/icon.png';

const { width } = Dimensions.get('window')

const CustomDrawerNavigation = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
                <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={HamburgerPhoto} style={{ height: 150, width: 150, borderRadius: 60 }} />
                </View>
                <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Cory Marshman</Text>
                </View>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
            <View style={{ alignItems: "center", bottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginRight: 15 }}>
                        <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Homepage'
      }
    },
    Settings: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'Settings'
      }
    },
    Notifications: {
      screen: NotificationsPage,
      navigationOptions: {
        title: 'Notifications'
      }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        title: 'News'
      }
    }
  },
    {
      drawerPosition: 'right',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (width / 3) * 2
    });
  
const MainHamburger = createAppContainer(Drawer);

export default MainHamburger;