import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import Manha from "./screens/manha";
import Tarde from "./screens/tarde";
import Noite from "./screens/noite";
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
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
            // Retorna o componente de ícone
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />
        <Tab.Screen
          name="Morning"
          component={Manha}
          options={{ title: "Saudação de manhã" }}
        />
        <Tab.Screen
          name="Afternoon"
          component={Tarde}
          options={{ title: "Saudação da tarde" }}
        />
        <Tab.Screen
          name="Night"
          component={Noite}
          options={{ title: "Saudação para dormir" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
