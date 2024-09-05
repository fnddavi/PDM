import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Hum from './screens/Hum';
import Dois from './screens/Dois';
import Tres from './screens/Tres';
import Quatro from './screens/Quatro';
import Cinco from './screens/Cinco';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';
import Onze from './screens/Onze';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Hum'
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName: string = '';

            switch (route.name) {
              case 'Hum':
                iconName = 'home-outline';
                break;
              case 'Dois':
                iconName = 'star-outline';
                break;
              case 'Tres':
                iconName = 'settings-outline';
                break;
              case 'Quatro':
                iconName = 'person-outline';
                break;
              case 'Cinco':
                iconName = 'mail-outline';
                break;
              case 'Seis':
                iconName = 'alert-outline';
                break;
              case 'Sete':
                iconName = 'cart-outline';
                break;
              case 'Oito':
                iconName = 'chatbubble-outline';
                break;
              case 'Nove':
                iconName = 'cloud-outline';
                break;
              case 'Dez':
                iconName = 'game-controller-outline';
                break;
              default:
                iconName = 'help-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name='Hum' component={Hum} options={{ title: "Hum" }} />
        <Drawer.Screen name='Dois' component={Dois} options={{ title: "Dois" }} />
        <Drawer.Screen name='Tres' component={Tres} options={{ title: "Três" }} />
        <Drawer.Screen name='Quatro' component={Quatro} options={{ title: "Quatro" }} />
        <Drawer.Screen name='Cinco' component={Cinco} options={{ title: "Cinco" }} />
        <Drawer.Screen name='Seis' component={Seis} options={{ title: "Seis" }} />
        <Drawer.Screen name='Sete' component={Sete} options={{ title: "Sete" }} />
        <Drawer.Screen name='Oito' component={Oito} options={{ title: "Oito" }} />
        <Drawer.Screen name='Nove' component={Nove} options={{ title: "Nove" }} />
        <Drawer.Screen name='Dez' component={Dez} options={{ title: "Dez" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
