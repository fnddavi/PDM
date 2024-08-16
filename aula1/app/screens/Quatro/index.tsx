import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import logo from '../../assets/adaptive-icon.png'; // Imagem para todos os quadrados
import {styles} from './styles';

const Quatro: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.crimsonContainer}>
                <View style={styles.limeBox}>
                    <Image source={logo} style={styles.originalImage} />
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
        </View>
    );
};

export default Quatro;
