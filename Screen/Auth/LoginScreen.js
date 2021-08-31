import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Button from "react-native-button";
import { AppStyles } from "./AppStyles";


const LoginScreen = ({ navigation }) => {

    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={[styles.title, styles.leftTitle]}>Welcome!</Text>
                <Text style={[styles.title, styles.title]}>Sign in to continue</Text>
                <View style={styles.InputContainer1}>
                    <TextInput
                        style={styles.body}
                        placeholder="E-mail or phone number"
                        onChangeText={(email) =>
                            setUserEmail(email)
                        }
                        // value={email}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer2}>
                    <TextInput
                        style={styles.body}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(password) =>
                            setUserPassword(password)
                        }
                        // value={password}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Text style={styles.forgot} onPress={() => navigation.navigate("Forgot")}>Forgot password?</Text>
                <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    Log in
                </Button>

                <Text>New to Yabros?
                    <Text style={styles.signin} onPress={() => navigation.navigate("RegisterScreen")}>Sign Up</Text>
                </Text>
            </View>
        </ScrollView>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
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
        backgroundColor: AppStyles.color.tint,
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
    },
    facebookContainer: {
        width: 192,
        backgroundColor: AppStyles.color.facebook,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    forgot: {
        alignSelf: "stretch",
        textAlign: 'right',
        paddingRight: 50,
        color: AppStyles.color.blue
    },
    facebookText: {
        color: AppStyles.color.white
    },
    googleContainer: {
        width: 192,
        height: 48,
        marginTop: 30
    },
    googleText: {
        color: AppStyles.color.white
    },
    signin: {
        color: AppStyles.color.blue
    }
});


