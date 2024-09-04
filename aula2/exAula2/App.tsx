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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onze'>
      <Stack.Screen name='Onze' component={Onze} options={{ title: "Início" }} />
        <Stack.Screen name='Dez' component={Dez} options={{ title: "Dez" }} />
        <Stack.Screen name='Nove' component={Nove} options={{ title: "Nove" }} />
        <Stack.Screen name='Oito' component={Oito} options={{ title: "Oito" }} />
        <Stack.Screen name='Sete' component={Sete} options={{ title: "Sete" }} />
        <Stack.Screen name='Seis' component={Seis} options={{ title: "Seis" }} />
        <Stack.Screen name='Cinco' component={Cinco} options={{ title: "Cinco" }} />
        <Stack.Screen name='Quatro' component={Quatro} options={{ title: "Quatro" }} />
        <Stack.Screen name='Tres' component={Tres} options={{ title: "Três" }} />
        <Stack.Screen name='Dois' component={Dois} options={{ title: "Dois" }} />
        <Stack.Screen name='Hum' component={Hum} options={{ title: "Hum" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;