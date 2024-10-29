import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';
import styles from "./styles";


const Mail: React.FC = () => {
    const sendMail = () => {
        // Endereço de e-mail do destinatário
        const to = 'arley.souza@fatec.sp.gov.br';
        const subject = 'Aula de programação'; // Assunto do e-mail
        // Corpo do e-mail
        const body = 'Boa noite.\n\nAula de envio de e-mail.\n\nAtenciosamente.';
        // Criação da URL com o esquema 'mailto'
        const url =
            `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // Verifica se a URL pode ser aberta (se há um cliente de e-mail configurado)
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    // Abre o cliente de e-mail padrão com o destinatário, assunto e corpo preenchidos
                    Linking.openURL(url);
                } else {
                    Alert.alert('Erro', 'Nenhum aplicativo de e-mail está configurado neste dispositivo.');
                }
            })
            .catch((err) => console.error('Erro ao tentar abrir o cliente de e-mail', err));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Enviar e-mail" onPress={sendMail} />
            </View>
        </SafeAreaView>
    );
};

export default Mail;
