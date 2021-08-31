// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { AppStyles } from "../../Auth/AppStyles";

const ProductTerm = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: '5%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                    <View>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 35 }}>
                            Product Terms
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("ProductPrice")}
                >
                    <Image source={require('../../../Image/icon/1(1).png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

                    <Text style={styles.buttonTextStyle}>
                        Per Bag
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("ProductPrice1")}
                >
                    <Image source={require('../../../Image/icon/2(1).png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

                    <Text style={styles.buttonTextStyle}>
                        Per Day
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("ProductPrice2")}
                >
                    <Image source={require('../../../Image/icon/3(1).png')} resizeMode='contain' style={{ height: 40, marginLeft: 20 }} />

                    <Text style={styles.buttonTextStyle}>
                        Per Ton
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductTerm;
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