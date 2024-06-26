// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
const Stack = createNativeStackNavigator();

function Index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;