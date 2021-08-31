// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { AppStyles } from "../../Auth/AppStyles";
import { ListItem, Avatar, Button, Icon, Tab } from 'react-native-elements';


const Polls = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: '5%' }}>
        <View style={{ backgroundColor: 'blue' }}>
          <Image style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} source={require('../../../Image/excave.png')} />
          <Text style={[styles.title]}>Developer</Text>
        </View>

        <View style={{ marginTop: 30 }}>

          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("ChangeMail")}>Change Email</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content >
              <ListItem.Title onPress={() => navigation.navigate("ChangePassword")}>Change Password</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("UpdateProfile")}>Update Profile</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
        {/* {'\n'} */}
        <View style={{ marginTop: 40 }}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("About")}>About</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("Contact")}>Contact Yabros</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title onPress={() => navigation.navigate("LoginScreen")}>Sign Out</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
      <View style={{ alignItems: 'center' }} >
        <View style={{ flexDirection: "row", alignContent: 'center', padding: 15 }}>
          <View >
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Image source={require('../../../Image/icon/pay3.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60, marginTop: 4 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Product")}>
              <Image source={require('../../../Image/icon/suitcase.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Channels")}>
              <Image source={require('../../../Image/icon/people.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Polls")}>
              <Image source={require('../../../Image/icon/set.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Polls;
const styles = StyleSheet.create({
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10
  },
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: AppStyles.color.white,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30
  }
});