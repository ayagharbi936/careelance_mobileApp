import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './src/views/navigation/DrawerNavigation';
const Stack = createNativeStackNavigator();

//screens
import HomeScreen from './src/views/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerScreen" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
