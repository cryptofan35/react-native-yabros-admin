// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Button from "react-native-button";
import { AppStyles } from "../../Auth/AppStyles";

const About = ({ navigation }) => {
    return (
        <ScrollView style={{ marginTop: '5%' }}>
            <View style={styles.container}>
                <Text style={styles.title}>YABROS LOGISTICS</Text>
                <Text style={styles.tex}>Yabros Logistics is a Modern Company Located in Warri, Delta State, Nigeria that Focuses on Boat Rental, Wate Disposal, Truck Rental and Heavy Duty Equipments</Text>
                <Text style={styles.title}>Boat Rental</Text>
                <Text style={styles.tex}>Boat Rental Yabros losistics provides the best boat rental services that focused on our customers' wishes and expectations when it comes to getting one of a kind of Water Vehicles. Yabros boat rental gives our customers the best water vehicles such as 75HP, 115HP and 200HP and Executive boats and also heavy duties. Boat such as TuG BOATS, BADGES, HOUSE BOATS, COLOR BOATS etc.</Text>
                <Text style={styles.title}>Waste Disposal</Text>
                <Text style={styles.tex}>Yabros logistics waste disposal is on a mission to maximise resource value while elimination effects of both domestic and industrial wastes disposal. Nigeria society today but Yabros logistic company has take it upon himself to solve that waste problems by providing means of proper waste disposal and recycle</Text>
                <Text style={styles.title}>Truck Rentals</Text>
                <Text style={styles.tex}>Yabros logistics company also covers the issue concerning the renting of quality trucks. Yabros logistics invests its time in getting the best vehicles from the best dealers around the world, we offers pickups, cargo vans & box trucks in a variety of sizes. Our customers are entitled to expectational customer services along side safe use of the assets.</Text>
                <Text style={styles.title}>Heavy Duties Equipments</Text>
                <Text style={styles.tex}>Yabros logistics heavy equipments are ideal solutions for general construction, demolition, landscaping and roadwork etc. Yabros logistics are involved in renting equipments such as SWAMP, BUGGIES, CRANES, EXCAYTOR and operators for domestic and industrial uses.</Text>

            </View>
        </ScrollView>
    );
};

export default About;
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
        fontSize: 20,
        marginBottom: 20
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