// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
// import { SearchBar } from 'react-native-elements';

const NavigationDrawerHeader = (props) => {
  // state = {
  //   search: '',
  // };

  // updateSearch = (search) => {
  //   this.setState({ search });
  // };

  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  // const { search } = this.state;
  return (

    <View style={{ flexDirection: 'row', bottom: 0 }}>
      <View style={{ width: '10%' }}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Image source={require('../../Image/icon/1.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: '10%', marginLeft: 40 }}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Image source={require('../../Image/icon/change.png')} style={{ width: 25, height: 25, marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '60%' }}>
        {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      /> */}
      </View>
      <View style={{ width: '10%', marginLeft: 40 }}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Image source={require('../../Image/icon/3062.png')} style={{ width: 25, height: 25, marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '10%', marginLeft: 35 }}>
        <TouchableOpacity onPress={toggleDrawer} style={{ alignContent: 'flex-end' }}>
          <Image source={require('../../Image/icon/699.png')} style={{ width: 22, height: 25, marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
      {/* <SearchBar
        placeholder="Search Here..." 
        // onChangeText={this.updateSearch} value={search}
      /> */}
    </View>
  );
};
export default NavigationDrawerHeader;