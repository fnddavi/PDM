import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Button } from 'react-native';
import logo from '../../assets/adaptive-icon.png'; // Imagem para todos os quadrados
import { styles } from './styles';


const Cinco: React.FC = () => {
    const createButtonAlert = () =>
        Alert.alert('Exercicio 5', 'Alerta!', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
        return (
            <View style={styles.container}>
              <Button title={'2-Button Alert'} onPress={createButtonAlert} />
            </View>
        );
}

    return (
        <View style={styles.container}>
            <View style={styles.crimsonContainer}>
                <View style={styles.limeBox}>
                    <View style={styles.limeBox}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={logo} style={styles.originalImage} />
                            <Button title={'Alerta'} onPress={createButtonAlert} /> {/* CONCERTAR CODIGO */}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.aquamarineContainer}>
                    <View style={styles.tealBox}>
                        <Image source={logo} style={styles.reducedImage} />
                    </View>
                    <View style={styles.skyblueBox}>
                        <Image source={logo} style={styles.reducedImage} />
                    </View>
                </View>
            </View>
            <View style={styles.salmonBox}>
                <Image source={logo} style={styles.originalImage} />
            </View>
        </View >
    );
};

export default Cinco;
