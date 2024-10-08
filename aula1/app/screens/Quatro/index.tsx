import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../../assets/adaptive-icon.png'; // Imagem para todos os quadrados
import {styles} from './styles';

const Quatro: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.crimsonContainer}>
                <View style={styles.limeBox}>
                        <Image source={logo} style={styles.image} />
                </View>
                <View style={styles.aquamarineContainer}>
                    <View style={styles.tealBox}>
                        <Image source={logo} style={styles.image} />
                    </View>
                    <View style={styles.skyblueBox}>
                        <Image source={logo} style={styles.image} />
                    </View>
                </View>
            </View>
            <View style={styles.salmonBox}>
                <Image source={logo} style={styles.image} />
            </View>
        </View>
    );
};

export default Quatro;
