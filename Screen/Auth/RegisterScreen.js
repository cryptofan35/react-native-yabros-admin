import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "./AppStyles";


const RegisterScreen = (props) => {

    const [fullname, setFullName] = useState('');
    const [email, setUserEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
    ] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={[styles.title, styles.leftTitle]}>Create Account</Text>
                <Text style={[styles.info]}>Enter your information below to create your account</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Full Name"
                        onChangeText={(fullname) => setFullName(fullname)}
                        value={fullname}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Phone Number"
                        onChangeText={(phone) => setPhone(phone)}
                        value={phone}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="E-mail Address"
                        onChangeText={(email) => setUserEmail(email)}
                        value={email}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button
                    containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
                    style={styles.facebookText}
                    onPress={() => props.navigation.navigate('LoginScreen')}
                >
                    Sign Up
                </Button>
            </View>
        </ScrollView>
    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.black,
        marginTop: 70,
        marginBottom: 40
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "center"
    },
    info: {
        alignSelf: "stretch",
        textAlign: "center",
        color: AppStyles.color.black,
        fontSize: 14,
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
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white
    },
    placeholder: {
        color: "red"
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
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
    facebookContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    facebookText: {
        color: AppStyles.color.white
    }
});


