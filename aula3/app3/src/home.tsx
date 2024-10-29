import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Button, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import SmsScreen from './resources/sms';
import WhatsappScreen from './resources/whatsapp';
import MailScreen from './resources/mail';
import MapsScreen from './resources/maps';
import ContactsScreen from './resources/contacts';
import PhotoScreen from './resources/photo';
import GaleryScreen from './resources/galery';
import CameraScreen from './resources/camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

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
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const uris = response.assets.map(asset => asset.uri).filter(uri => uri !== undefined) as string[];
        setImageUris(prev => [...prev, ...uris]);
      }
    });
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const uris = response.assets.map(asset => asset.uri).filter(uri => uri !== undefined) as string[];
        setImageUris(prev => [...prev, ...uris]);
      }
    });
  };


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
        <TouchableOpacity onPress={handleChoosePhoto}>
          <Icon name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTakePhoto}>
          <Icon name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {imageUris.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
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
    backgroundColor: '#a0a0a0',
  },
  buttonContainer: {
    marginBottom: 50,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 'auto',

  },
  iconContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
    right: 20, // Alinha à direita
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 100, // Largura para os botões
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    margin: 5,
    borderRadius: 5, // Para cantos arredondados
  },
});
