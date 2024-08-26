import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { styles } from './styles';

const Onze: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../../assets/fatec_jacarei_cor.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>HOME</Text>
            <View style={styles.buttonsContainer}>
                {['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'].map((label, index) => (
                    <TouchableOpacity key={index} style={styles.button}>
                        <Text style={styles.buttonText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Onze;
