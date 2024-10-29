import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';
import styles from "./styles";


const Whatsapp: React.FC = () => {
    const sendWhatsapp = () => {
        // Número de telefone no formato internacional (com código do país)
        const phoneNumber = '5512987654321';
        const message = 'Boa noite!\nCorpo da mensagem a ser enviada.\nAtenciosamente.';
        // Criação da URL com o esquema do WhatsApp
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // Verifica se a URL pode ser aberta (se o WhatsApp está instalado)
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    /// Abre o WhatsApp com o número e a mensagem preenchidos
                    Linking.openURL(url);
                } else {
                    Alert.alert('Erro', 'O WhatsApp não está instalado neste dispositivo.');
                }
            })
            .catch((err) => console.error('Erro ao tentar abrir o WhatsApp', err));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Enviar WhatsApp" onPress={sendWhatsapp} />
            </View>
        </SafeAreaView>
    );
};
export default Whatsapp;