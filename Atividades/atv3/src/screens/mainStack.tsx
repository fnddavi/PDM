import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ContactListScreen from "./ContactListScreen";
import ContactDetailScreen from "./ContactDetailScreen";
import AddContactScreen from "./AddContactScreen";

const Stack = createStackNavigator();

const MainStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contacts" component={ContactListScreen} />
      <Stack.Screen name="AddContact" component={AddContactScreen} />
      <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
//