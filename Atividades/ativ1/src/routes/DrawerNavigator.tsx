import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Importando suas telas
import MegaSena from '../screens/MegaSena';
import Quina from '../screens/Quina';
import Timemania from '../screens/Timemania';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MegaSena">
        <Drawer.Screen name="Mega Sena" component={MegaSena} />
        <Drawer.Screen name="Quina" component={Quina} />
        <Drawer.Screen name="Timemania" component={Timemania} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
