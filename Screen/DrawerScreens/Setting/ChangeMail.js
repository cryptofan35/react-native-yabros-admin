// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../Auth/AppStyles";

const ChangeMail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.leftTitle]}>Change Email</Text>

            <View style={styles.InputContainer1}>
                <TextInput
                    style={styles.body}
                    // value={email}
                    placeholderTextColor={AppStyles.color.grey}
                    placeholder="Current Email"
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.InputContainer1}>
                <TextInput
                    style={styles.body}
                    // value={email}
                    placeholder="New Email"
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>

            <Button
                containerStyle={styles.loginContainer}
                style={styles.loginText}
                onPress={() => navigation.navigate("Polls")}
            >
                Update Email
            </Button>
        </View>
    );
};

export default ChangeMail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
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