import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Button, View } from 'react-native';
import SmsScreen from './sms';
import WhatsappScreen from './whatsapp';
import MailScreen from './mail';
import MapsScreen from './maps';
import ContactsScreen from './contacts';
import PhotoScreen from './photo';
import GaleryScreen from './galery';
import CameraScreen from './camera';


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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => navigation.navigate('SMS')} title="SMS" />
      <Button onPress={() => navigation.navigate('WhatsApp')} title="WhatsApp" />
      <Button onPress={() => navigation.navigate('Mail')} title="E-Mail" />
      <Button onPress={() => navigation.navigate('Maps')} title="MAPS" />
        <Button onPress={() => navigation.navigate('contacts')} title="Contatos" />
        <Button onPress={() => navigation.navigate('photo')} title="Tirar Foto" />
        <Button onPress={() => navigation.navigate('galery')} title="Galeria" />
        <Button onPress={() => navigation.navigate('camera')} title="Câmera" />
    </View>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SMS" component={SmsScreen} />
        <Drawer.Screen name="WhatsApp" component={WhatsappScreen} />
        <Drawer.Screen name="Mail" component={MailScreen} />
        <Drawer.Screen name="Maps" component={MapsScreen} />
        <Drawer.Screen name="contacts" component={ContactsScreen} />
        <Drawer.Screen name="photo" component={PhotoScreen} />
        <Drawer.Screen name="galery" component={GaleryScreen} />
        <Drawer.Screen name="camera" component={CameraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
