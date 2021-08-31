// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../Auth/AppStyles";

const UpdateAdmin = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image source={require('../../../Image/icon/ppp2.png')} />

            <View style={styles.InputContainer1}>
                <TextInput
                    style={styles.body}
                    // value={email}
                    placeholder="Full Name"
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.InputContainer1}>
                <TextInput
                    style={styles.body}
                    // value={email}
                    placeholder="Phone Number"
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>

            <Button
                containerStyle={styles.loginContainer}
                style={styles.loginText}
                onPress={() => navigation.navigate("Channels")}
            >
                Update Admin
            </Button>
            <Text onPress={() => navigation.navigate("Channels")}>
                Remove Admin
            </Text>
        </View>
    );
};

export default UpdateAdmin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 60
    },
    or: {
        color: "black",
        marginTop: 40,
        marginBottom: 10
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.black,
        marginTop: 20
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "center",
        marginTop: 100
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
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
    loginText: {
        color: AppStyles.color.white
    },
    placeholder: {
        color: "red"
    },
    InputContainer1: {
        width: AppStyles.textInputWidth.main,
        marginTop: 60,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main
    },
    InputContainer2: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main,
        marginBottom: 20
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    }
});