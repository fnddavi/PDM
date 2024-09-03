import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Manha from './screens/manha';
import Tarde from './screens/tarde';
import Noite from './screens/noite';
import { RootStackParamList } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" component={Home}
          options={{ title: 'Início' }} />
        <Stack.Screen
          name="Morning" component={Manha}
          options={{ title: 'Saudação de manhã' }} />
        <Stack.Screen
          name="Afternoon" component={Tarde}
          options={{ title: 'Saudação da tarde' }} />
        <Stack.Screen
          name="Night" component={Noite}
          options={{ title: 'Saudação para dormir' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
