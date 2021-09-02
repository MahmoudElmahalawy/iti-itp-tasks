import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function ScreensNavigator() {
  return (
    <NavigationContainer initialRouteName={'LoginScreen'}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LoginScreen = ({navigation}) => {
  return <Login></Login>;
};
