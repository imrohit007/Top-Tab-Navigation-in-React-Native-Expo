import React from 'react';

import ChatScreen from './Screens/Chat';
import ContactsScreen from './Screens/Contacts';
import GalleryScreen from './Screens/Gallery';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{paddingTop:20}}>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

