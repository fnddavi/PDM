import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/home';
import OpenYoutube from './src/features/youtube';
import OpenDialer from './src/features/dialer';
import OpenInstagram from './src/features/instagram';
import ContactsComponent from './src/features/contacts_one';
import ContactsComponent2 from './src/features/contacts_two';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002200',
  },
});
