import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Screens/Home';
import React from 'react'
import { Colors } from '../colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import About from './About';
import Contact from './Contact';

const Tab = createMaterialBottomTabNavigator();

function MainRoute() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: '#ffffff' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={Contact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-account-phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainRoute