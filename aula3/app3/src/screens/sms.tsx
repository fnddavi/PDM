import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';
import styles from "./styles";


const Sms: React.FC = () => {
    const sendSms = () => {
        const phoneNumber = '1234567890';
        const message = 'Boa noite!\nCorpo da mensagem a ser enviada.\nAtenciosamente.';
        // Criação da URL com o esquema SMS
        const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        // Verifica se a URL pode ser aberta (se o dispositivo suporta envio de SMS)
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    // Abre o app de SMS padrão com o número e mensagem
                    Linking.openURL(url);
                } else {
                    Alert.alert('Erro', 'Este dispositivo não suporta envio de SMS.');
                }
            })
            .catch((err) => console.error('Erro ao enviar SMS', err));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Enviar SMS" onPress={sendSms} />
            </View>
        </SafeAreaView>
    );
};
export default Sms;
