// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import RegisterScreen from './Screen/Auth/RegisterScreen';
import LoginScreen from './Screen/Auth/LoginScreen';
import Forgot from './Screen/Auth/Forgot';
import HomeScreen from './Screen/DrawerScreens/Home/HomeScreen';
import Product from './Screen/DrawerScreens/product/Product';
import Channels from './Screen/DrawerScreens/Myteam/Channels';
import Polls from './Screen/DrawerScreens/Setting/Polls';
import ProductCategory from './Screen/DrawerScreens/product/SelectCategory';
import ProductName from './Screen/DrawerScreens/product/ProductName';
import ProductDescription from './Screen/DrawerScreens/product/ProductDescription';
import ProductTerm from './Screen/DrawerScreens/product/ProductTerm';
import ProductPrice from './Screen/DrawerScreens/product/ProductPrice';
import ProductPrice1 from './Screen/DrawerScreens/product/ProductPrice1';
import ProductPrice2 from './Screen/DrawerScreens/product/ProductPrice2';
import ProductImage from './Screen/DrawerScreens/product/ProductImage';
import AddProduct from './Screen/DrawerScreens/product/AddProduct';
import NewAdmin from './Screen/DrawerScreens/Myteam/NewAdmin';
import UpdateAdmin from './Screen/DrawerScreens/Myteam/UpdateAdmin';
import ChangeMail from './Screen/DrawerScreens/Setting/ChangeMail';
import ChangePassword from './Screen/DrawerScreens/Setting/ChangePassword';
import UpdateProfile from './Screen/DrawerScreens/Setting/UpdateProfile';
import About from './Screen/DrawerScreens/Setting/About';
import Contact from './Screen/DrawerScreens/Setting/Contact';
import OrderDetail from './Screen/DrawerScreens/Home/OrderDetail';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerShown: true
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            title: 'Forgot Password', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerShown: true
          }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Channels"
          component={Channels}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Polls"
          component={Polls}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductCategory"
          component={ProductCategory}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductName"
          component={ProductName}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductTerm"
          component={ProductTerm}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductPrice"
          component={ProductPrice}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductPrice1"
          component={ProductPrice1}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductPrice2"
          component={ProductPrice2}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ProductImage"
          component={ProductImage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="NewAdmin"
          component={NewAdmin}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="UpdateAdmin"
          component={UpdateAdmin}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ChangeMail"
          component={ChangeMail}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2', //Set Header color
            },
            headerTintColor: '#000', //Set Header text color
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;