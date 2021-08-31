// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../Auth/AppStyles";

const Contact = ({ navigation }) => {
    return (
        <ScrollView style={{ marginTop: '5%' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Contact Us</Text>
                <Text style={styles.title1}>Address</Text>
                <Text style={styles.tex}>168 Warri/Sapele Road, Opposite Ojojo Primary School, Delta State, Nigeria</Text>
                <Text style={styles.title1}>Phone Number</Text>
                <Text style={styles.tex}>+2348051847699</Text>
                <Text style={styles.title1}>Website</Text>
                <Text style={styles.tex}>www.yabros.com.ng</Text>
                <Text style={styles.title1}>Email</Text>
                <Text style={styles.tex}>yabroslogistics@gmail.com</Text>
            </View>
        </ScrollView>
    );
};

export default Contact;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        marginLeft: 30,
        marginRight: 30,

    },
    tex: {
        lineHeight: 30,
        fontSize: 15,
        textAlign: 'justify'
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.black,
        textAlign: 'left',
        fontSize: 40,
        marginBottom: 20,
    },
    title1: {
        fontWeight: "bold",
        color: AppStyles.color.black,
        textAlign: 'left',
        fontSize: 30,
        marginTop: 40
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
    },
    loginText: {
        color: AppStyles.color.white
    },
    InputContainer1: {
        width: AppStyles.textInputWidth.main,
        marginTop: 60,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.starRating,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 50,
        marginBottom: 15
    },
});