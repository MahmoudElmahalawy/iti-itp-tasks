import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigator';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

import type {Node} from 'react';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
