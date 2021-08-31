// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { Box, FlatList } from "native-base";
import { AppStyles } from "../../Auth/AppStyles";
import { linear } from 'react-native/Libraries/Animated/Easing';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Tab } from 'react-native-elements';
import Button from "react-native-button";


const HomeScreen = ({ navigation }) => {
  // const data = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  // ]
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={{ marginTop: '5%' }}>
        <Text style={[styles.title]}>Orders</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("OrderDetail")}
        >
          <Image source={require('../../../Image/swamp.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />
          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>


        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/swamp.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />
          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/tug.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />
          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/vessel.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />

          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/barge.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />

          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/excave.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />
          <View style={styles.buttonTextStyle}>
            <View>
              <Text>Truck Rentals{'\n'}Fri Aug 13 2021</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Button style={{ backgroundColor: 'blue', color: 'white', width: 80, borderRadius: AppStyles.borderRadius.main, }}>Pending</Button>
              <Button style={{ backgroundColor: 'green', color: 'white', marginLeft: 20, width: 80, borderRadius: AppStyles.borderRadius.main }}>Sent</Button>

            </View>
          </View>
        </TouchableOpacity>
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

export default HomeScreen;

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
  loginContainer: {
    width: 50,
    backgroundColor: AppStyles.color.blue,
    borderRadius: AppStyles.borderRadius.main,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: AppStyles.color.black,
    marginTop: 20,
    marginLeft: 30
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 100,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
    flexDirection: 'row'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 19,
    marginLeft: 20,
  },
  loginText: {
    color: AppStyles.color.white
  },
});