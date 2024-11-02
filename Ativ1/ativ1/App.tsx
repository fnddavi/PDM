import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MegaSenaScreen from './src/screens/MegaSena';
import { LotteryProvider } from './src/contexts/LotteryContext';

export default function App() {
  return (
    <LotteryProvider>
      <MegaSenaScreen />
    </LotteryProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
