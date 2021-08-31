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


const OrderDetail = ({ navigation }) => {
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

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                // onPress={handleSubmitPress}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../Image/swamp.png')} resizeMode='cover' style={{ height: 40, marginLeft: 20 }} />
                        <Text style={{ marginTop: 6, marginLeft: 10, fontSize: 20 }}>*4</Text>
                    </View>

                    <View style={styles.buttonTextStyle}>
                        <Text><Text style={{ fontWeight: 'bold' }}>Truck Rentals</Text>{'\n'}Fri Aug 13 2021</Text>
                    </View>


                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 30 }}>
                        <Text>Email</Text>
                        <Text style={{ marginBottom: 30 }}>kiryl@gmail.com</Text>
                        <Text>Payment Option</Text>
                        <Text style={{ marginBottom: 30 }}>Online Transfer</Text>
                        <Text>Adrress</Text>
                        <Text style={{ marginBottom: 30 }}>Eddddd</Text>
                        <Text>Booking Date</Text>
                        <Text style={{ marginBottom: 30 }}>Fri Aug 13 2021</Text>
                        <Text>Booking Status</Text>
                        <Text style={{ marginBottom: 60 }}>Pending</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Total</Text>
                    </View>
                    <View style={{ marginLeft: 70 }}>
                        <Text>Phone Number</Text>
                        <Text>123456789</Text>
                        <Text style={{ marginTop: 30 }}>Payment Status</Text>
                        <Text>Sent</Text>
                        <Text style={{ marginTop: 30 }}>Other</Text>
                        <Text>24</Text>
                        <Text style={{ marginTop: 30 }}>Pickup Date</Text>
                        <Text>Wed Aug 11 2021</Text>
                        <Text style={{ marginTop: 30 }}>Reference Number</Text>
                        <Text>76543</Text>
                        <Text style={{ marginTop: 60, fontWeight: 'bold', fontSize: 25 }}>12240000.00</Text>
                    </View>

                </View>
                <Button containerStyle={styles.loginContainer}
                    style={styles.loginText} onPress={() => navigation.navigate("HomeScreen")}>Update Order</Button>
            </ScrollView>


        </SafeAreaView >
    );
};

export default OrderDetail;

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
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 50,
        marginBottom: 15,
        marginLeft: 50
    },
    loginText: {
        color: AppStyles.color.white
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
});