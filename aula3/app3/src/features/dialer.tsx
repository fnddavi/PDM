import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView, Platform } from 'react-native';

const OpenDialer: React.FC = () => {
    const openDialer = () => {
        const phoneNumber = '+551239537926'; // Exemplo: Número com DDI e DDD
        const url = `tel:${phoneNumber}`;

        // Verifica se a URL pode ser aberta
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    Alert.alert('Erro', 'Este dispositivo não suporta chamadas telefônicas ou o número é inválido.');
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.error('Erro ao abrir a interface de discagem:', err));
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Ligar" onPress={openDialer} />
        </SafeAreaView>
    );
};

export default OpenDialer;
