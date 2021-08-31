import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import Button from "react-native-button";
import { AppStyles } from "./AppStyles";

const Forgot = ({ navigation }) => {

    const [email, setUserEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>Please Enter Your Email</Text>
            <View style={styles.InputContainer1}>
                <TextInput
                    style={styles.body}
                    placeholder="E-mail Address"
                    onChangeText={(email) =>
                        setUserEmail(email)
                    }
                    value={email}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>

            <Button
                containerStyle={styles.loginContainer}
                style={styles.loginText}
                onPress={() => navigation.navigate("LoginScreen")}
            >
                Reset Password
            </Button>
        </View>
    );
};

export default Forgot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.black,
        marginTop: 50
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

});

