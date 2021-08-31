// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../Auth/AppStyles";

const ProductImage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                <View>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                        Product Image
                    </Text>
                </View>
            </View>
            <Image source={require('../../../Image/product.png')} />
            <Button
                containerStyle={styles.loginContainer}
                style={styles.loginText}
                onPress={() => navigation.navigate("AddProduct")}
            >
                Review Products
            </Button>
        </View>
    );
};

export default ProductImage;
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
        // marginTop: 60,
        borderWidth: 1,
        width: 150,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main
    },
    body: {
        height: 42,
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