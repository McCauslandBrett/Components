import Native2Screen from '../screens/Native2Screen.js'; 
import NativeScreen from '../screens/NativeScreen.js';
import LandingScreen from '../screens/LandingScreen.js';
import ButtonsScreen from '../screens/ButtonsScreen.js';
import Profile2Screen from '../screens/Profile2Screen.js';
import Profile1Screen from '../screens/Profile1Screen.js';
import CardsScreen from '../screens/CardsScreen.js';
import LayoutsScreen from '../screens/LayoutScreen.js';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Landing">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Layouts" component={LayoutsScreen} />
        <Drawer.Screen name="Cards" component={CardsScreen} />
        <Drawer.Screen name="Profile1" component={Profile1Screen} />
        <Drawer.Screen name="Profile2" component={Profile2Screen} />
        <Drawer.Screen name="Buttons" component={ButtonsScreen} />
        <Drawer.Screen name="Landing" component={LandingScreen} />
        <Drawer.Screen name="Native" component={NativeScreen} />
        <Drawer.Screen name="Native2" component={Native2Screen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
