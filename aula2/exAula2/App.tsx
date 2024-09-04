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

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Hum'>
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
