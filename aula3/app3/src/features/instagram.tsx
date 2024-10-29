import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';

const OpenInstagram: React.FC = () => {
    const openInstagram = () => {
        const url = 'https://www.instagram.com/fatec_jacarei/'; // URL do perfil da Fatec Jacareí

        // Verifica se o dispositivo pode abrir a URL
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    Alert.alert('Erro', 'Não foi possível abrir o Instagram.');
                } else {
                    return Linking.openURL(url); // Abre o link no Instagram ou navegador
                }
            })
            .catch((err) => console.error('Erro ao abrir o Instagram:', err));
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Abrir Instagram" onPress={openInstagram} />
        </SafeAreaView>
    );
};

export default OpenInstagram;
