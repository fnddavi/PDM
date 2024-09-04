import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { styles } from './styles';
import { DrawerScreenProps } from "@react-navigation/drawer";

type OnzeProps = DrawerScreenProps<any, any>;

const Onze: React.FC<OnzeProps> = ({ navigation }) => {
    const screens = ["Hum", "Dois", "Tres", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../../assets/fatec_jacarei_cor.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.buttonsContainer}>
                {screens.map((label, index) => (
                     <TouchableOpacity
                     key={index}
                     style={styles.button}
                     onPress={() => navigation.navigate(label)}
                   >
                     <Text style={styles.buttonText}>{label}</Text>
                   </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Onze;
