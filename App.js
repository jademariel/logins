import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Recovery from './screens/Recovery';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={Recovery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}