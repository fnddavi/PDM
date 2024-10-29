import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Button, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import SmsScreen from './resources/sms';
import WhatsappScreen from './resources/whatsapp';
import MailScreen from './resources/mail';
import MapsScreen from './resources/maps';
import ContactsScreen from './resources/contacts';
import PhotoScreen from './resources/photo';
import GaleryScreen from './resources/galery';
import CameraScreen from './resources/camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

type DrawerParamList = {
  Home: undefined;
  SMS: undefined;
  WhatsApp: undefined;
  Mail: undefined;
  Maps: undefined;
  contacts: undefined;
  photo: undefined;
  galery: undefined;
  camera: undefined;
};

type HomeScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('SMS')} title="SMS" />
        <Button onPress={() => navigation.navigate('WhatsApp')} title="WhatsApp" />
        <Button onPress={() => navigation.navigate('Mail')} title="E-Mail" />
        <Button onPress={() => navigation.navigate('Maps')} title="MAPS" />
        <Button onPress={() => navigation.navigate('contacts')} title="Contatos" />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('galery')}>
          <Icon name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('photo')}>
          <Icon name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="SMS" component={SmsScreen} />
        <Drawer.Screen name="WhatsApp" component={WhatsappScreen} />
        <Drawer.Screen name="Mail" component={MailScreen} />
        <Drawer.Screen name="Maps" component={MapsScreen} />
        <Drawer.Screen name="contacts" component={ContactsScreen} />
        <Drawer.Screen name="photo" component={PhotoScreen} />
        <Drawer.Screen name="camera" component={CameraScreen} />
        <Drawer.Screen name="galery" component={GaleryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 50, // Ajuste conforme necessário
  },
  iconContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10, // Ajusta a posição considerando a altura da StatusBar
    right: 20, // Alinha à direita
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100, // Largura para os botões
  },
});
