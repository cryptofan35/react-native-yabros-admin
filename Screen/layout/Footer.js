// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { linear } from 'react-native/Libraries/Animated/Easing';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Footer = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '25%', marginLeft: 40 }}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Image source={require('../../Image/icon/home.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '25%', marginLeft: 40 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("People")}>
                    <Image source={require('../../Image/icon/ring.png')} style={{ marginLeft: '12%' }} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '25%', marginLeft: 40 }}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Image source={require('../../Image/icon/message.png')} style={{ marginLeft: '12%' }} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '25%', marginLeft: 40 }}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Image source={require('../../Image/icon/man.png')} style={{ marginLeft: '12%' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;

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
});