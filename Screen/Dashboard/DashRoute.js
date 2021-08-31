// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomSidebarMenu from '../Components/CustomSidebarMenu';
import NavigationDrawerHeader from '../Components/NavigationDrawerHeader';
import { Image } from 'react-native';

// Import Screens
import HomeScreen from '..Channels/DrawerScreens/HomeScreen';
import SettingsScreen from '../DrawerScreens/SettingsScreen';
import People from '../DrawerScreens/People';
import Orgs from '../DrawerScreens/Orgs';
import Channels from '../DrawerScreens/Channels';
import Polls from '../DrawerScreens/Polls';
import Photos from './DrawerScreens/Photos';
import Files from '../DrawerScreens/Files';
import ShotsVideo from '../DrawerScreens/ShotsVideo';
import Spaces from '../DrawerScreens/Spaces';
import Market from '../DrawerScreens/Market';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'white', //Set Header text color
          headerTitle: '',
          icon: <Image source={require('./../Image/icon/3646.png')} style={{ width: '25px', height: '25px' }} />
          // headerTitleStyle: {
          //   fontWeight: 'bold', //Set Header text style
          // },
        }}
      />
    </Stack.Navigator>
  );
};
const PeopleStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="People">
      <Stack.Screen
        name="People"
        component={People}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const OrgsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Orgs">
      <Stack.Screen
        name="Orgs"
        component={Orgs}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ChannelsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Channels">
      <Stack.Screen
        name="Channels"
        component={Channels}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const PollsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Polls">
      <Stack.Screen
        name="Polls"
        component={Polls}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const PhotosStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Photos">
      <Stack.Screen
        name="Photos"
        component={Photos}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const FilesStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Files">
      <Stack.Screen
        name="Files"
        component={Files}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ShotsVideoStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ShotsVideo">
      <Stack.Screen
        name="ShotsVideo"
        component={ShotsVideo}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const SpacesStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Spaces">
      <Stack.Screen
        name="Spaces"
        component={Spaces}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const MarketStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Market">
      <Stack.Screen
        name="Market"
        component={Market}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'white', //Set Header color
        },
        headerTintColor: 'black', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#343C4F',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{
          drawerLabel: 'Home Screen',
          // icon:<Image source={require('./../Image/icon/3646.png')} />
          // icon:<Image source={require('./../Image/icon/3646.png')} style={{width:'25px', height:'25px'}} />
        }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="PeopleStack"
        options={{ drawerLabel: 'People' }}
        component={PeopleStack}
      />
      <Drawer.Screen
        name="OrgsStack"
        options={{ drawerLabel: 'Orgs' }}
        component={OrgsStack}
      />
      <Drawer.Screen
        name="ChannelsStack"
        options={{ drawerLabel: 'Channels' }}
        component={ChannelsStack}
      />
      <Drawer.Screen
        name="PollsStack"
        options={{ drawerLabel: 'Polls' }}
        component={PollsStack}
      />
      <Drawer.Screen
        name="PhotosStack"
        options={{ drawerLabel: 'Photos' }}
        component={PhotosStack}
      />
      <Drawer.Screen
        name="FilesStack"
        options={{ drawerLabel: 'Files' }}
        component={FilesStack}
      />
      <Drawer.Screen
        name="ShotsVideoStack"
        options={{ drawerLabel: 'ShotsVideo' }}
        component={ShotsVideoStack}
      />
      <Drawer.Screen
        name="SpacesStack"
        options={{ drawerLabel: 'Spaces' }}
        component={SpacesStack}
      />
      <Drawer.Screen
        name="MarketStack"
        options={{ drawerLabel: 'Market' }}
        component={MarketStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: 'Setting Screen' }}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;