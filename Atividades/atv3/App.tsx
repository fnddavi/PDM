
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactProvider } from './src/contexts/ContactContext';

import Welcome from './src/screens/Welcome';
import { Contacts } from './src/screens/Contacts';
import { AddContact } from './src/screens/AddContact';
import { Location } from './src/screens/Location';
import { Contact } from './src/types';

export type RootStackParamList = {
  Welcome: undefined;
  Contacts: undefined;
  AddContact: undefined;
  Location: { contact: Contact };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#007AFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: 'Bem-vindo',
            }}
          />
          <Stack.Screen
            name="Contacts"
            component={Contacts}
            options={{
              title: 'Contatos',
              headerBackTitle: 'Voltar',
            }}
          />
          <Stack.Screen
            name="AddContact"
            component={AddContact}
            options={{
              title: 'Novo Contato',
              headerBackTitle: 'Voltar',
            }}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={({ route }) => ({
              title: route.params.contact.name,
              headerBackTitle: 'Voltar',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
};

export default App;
