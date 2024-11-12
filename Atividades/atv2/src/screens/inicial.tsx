// src/screens/InicialScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes';

interface InicialScreenProps {
    onSkip: () => void;
}

const InicialScreen: React.FC<InicialScreenProps> = ({ onSkip }) => {
    return (
        <View style={styles.inicialContainer}>
            <Text style={styles.inicialText}>Bem-vindo ao App!</Text>
            <TouchableOpacity style={styles.inicialButton} onPress={onSkip}>
                <Text style={styles.inicialButtonText}>Pular</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InicialScreen;
//