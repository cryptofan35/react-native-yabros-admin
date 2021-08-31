// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { AppStyles } from "../../Auth/AppStyles";

const Product = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: '5%' }}>
        <View style={{ flexDirection: 'row', marginBottom: 50 }}>
          <View>
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 35 }}>
              Product
            </Text>
          </View>
          <View style={{ right: 35, position: 'absolute' }}>
            <Text
              style={{ fontSize: 50, textAlign: 'right' }}
              onPress={() => navigation.navigate("ProductCategory")}
            >+</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/boat.png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

          <Text style={styles.buttonTextStyle}>
            Rent a Boat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/truck.png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

          <Text style={styles.buttonTextStyle}>
            Rent a truck
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/waste.png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

          <Text style={styles.buttonTextStyle}>
            Waste Disposal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
        // onPress={handleSubmitPress}
        >
          <Image source={require('../../../Image/equipment.png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

          <Text style={styles.buttonTextStyle}>
            Rent equipment
          </Text>
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

export default Product;
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
    fontSize: 40,
    fontWeight: "bold",
    color: AppStyles.color.black,
    // marginTop: 20,
    marginLeft: 30,
    // marginBottom: 50
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 80,
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
    marginLeft: 50
  },
});