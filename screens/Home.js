import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    
  );
}

export default Home;