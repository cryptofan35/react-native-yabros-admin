// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet, ImageBackground, Image} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';
const image = { uri: "../Image/icon/Rectangle.png"};
const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}  >
      <View style={{height:120}} >
        <ImageBackground source={require('../../Image/icon/Rectangle.png')}
                        style={{width:'100%', height:'100%'}}>
          <View style={stylesSidebar.profileHeader}>
            <View style={stylesSidebar.profileHeaderPicCircle}>
              <Image source={require('../../Image/icon/photo.png')}
              />
            </View>
            <Text style={stylesSidebar.profileHeaderText}>
              John Doe
            </Text>         
          </View>
        </ImageBackground>
      </View>
      {/* <View style={stylesSidebar.profileHeaderLine} /> */}

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#d8d8d8'}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    // backgroundColor:'white',
    // ImageBackground: URL('../Image/icon/Rectangle.png'),
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    // marginTop: 15,
  },
});