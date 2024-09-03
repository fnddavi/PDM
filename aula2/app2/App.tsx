import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/home";
import Manha from "./screens/manha";
import Tarde from "./screens/tarde";
import Noite from "./screens/noite";
import { RootStackParamList } from "./types";


const Drawer = createDrawerNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName: string;
            switch (route.name) {
              case "Home":
                iconName = "home-outline";
                break;
              case "Morning":
                iconName = "sunny-outline";
                break;
              case "Afternoon":
                iconName = "partly-sunny-outline";
                break;
              case "Night":
                iconName = "moon-outline";
                break;
              default:
                iconName = "alert-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />
        <Drawer.Screen
          name="Morning"
          component={Manha}
          options={{ title: "Saudação de manhã" }}
        />
        <Drawer.Screen
          name="Afternoon"
          component={Tarde}
          options={{ title: "Saudação da tarde" }}
        />
        <Drawer.Screen
          name="Night"
          component={Noite}
          options={{ title: "Saudação para dormir" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
