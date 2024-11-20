import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../themes';

const TelaInicial = ({ navigation }) => {
    const [timeLeft, setTimeLeft] = useState<number>(60); // Definindo o tipo do estado como número

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const navigateToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Mega-Sena' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App</Text>
            <Text style={styles.timer}>{timeLeft}s</Text>
            <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                <Text style={styles.buttonText}>Pular</Text>
            </TouchableOpacity>
        </View>
    );
};
