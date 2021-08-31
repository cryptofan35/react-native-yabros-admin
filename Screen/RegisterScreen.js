// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import Loader from './Components/Loader';

const RegisterScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  // const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  // const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = async () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please confirm Password');
      return;
    }
    // if (!userAddress) {
    //   alert('Please fill Address');
    //   return;
    // }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      username: userName,
      email: userEmail,
      confirm_password: userAge,
      // address: userAddress,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.112.105/codeigniter-blog-backend/public/admin/signup', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type':
        // 'application/x-www-form-urlencoded;charset=UTF-8',
        'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        {/* <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        /> */}
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
      }}>
        {/*<View style={{alignItems: 'center'}}>
           <Image
            source={require('../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View> */}
        <KeyboardAvoidingView enabled>
          <View style={{flexDirection: "row", marginTop:'5%', alignContent:'center'}}>
              <View style={{width:'50%'}}>
                <Text style={styles.registerTextStyle}>Sign Up
              </Text>
              </View>
              <View style={{width:'50%'}}>
                <Text
                  style={{color: '#C4C3C3', textAlign: 'center', fontSize: 18, alignSelf: 'center', padding: 10}}
                  onPress={() => props.navigation.navigate('LoginScreen')}>
                  Login
                </Text>
              </View>
          </View>
          <Image source={require('../Image/icon/8995.png')} style={{width: 19, height: 11, marginLeft: '22%'}} />
          <View style={styles.profileHeaderLine} />
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Account Name*"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Email*"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Password*"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Confirm Password*"
              placeholderTextColor="#8b9cb5"
              ref={ageInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={{flexDirection: "row", marginTop:'5%'}}>
            <RadioButton style={{marginLeft:30}}></RadioButton>
            <Text style={styles.registerTextStyle2}>I have read and agree to Clapback Privacy Policy and Terms of use</Text>
          </View>
          {/* <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAddress) =>
                setUserAddress(UserAddress)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View> */}
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            // onPress={handleSubmitButton}
            onPress={() => props.navigation.navigate('LoginScreen')}
            >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Image/icon/3673.png')}
              style={{
                width: '80%',
                height: 30,
                resizeMode: 'contain',
                margin: 10,
              }}
            />
            <View style={{flexDirection: "row", marginTop:'2%', alignContent:'center'}}>
              <Image source={require('../Image/icon/3670.png')} />
              <Image source={require('../Image/icon/3669.png')} style = {{marginLeft:10}} />
              <Image source={require('../Image/icon/3671.png')} style = {{marginLeft:10}} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#FF7B02',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#FF7B02',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
  },
  registerTextStyle2: {
    color: '#000000',
    textAlign: 'left',
    // fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    // marginTop: 15,
  },
});