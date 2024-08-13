import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Hum from './screens/Hum';
import Dois from './screens/Dois';
import Tres from './screens/Tres';

export default function App() {
  return (
    <>
      <Tres />
    </>
  );
}