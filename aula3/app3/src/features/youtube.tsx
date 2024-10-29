import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';

const OpenYoutube: React.FC = () => {
    const openYoutubeVideo = () => {
        const videoId = 'dQw4w9WgXcQ'; // Substitua pelo ID do vídeo desejado
        const url = `vnd.youtube://${videoId}`; // URL para abrir o app do YouTube

        // Verifica se o dispositivo suporta abrir a URL do YouTube
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url); // Abre o app do YouTube com o vídeo
                } else {
                    Alert.alert('Erro', 'O aplicativo YouTube não está instalado.');
                }
            })
            .catch((err) => console.error('Erro ao abrir o YouTube:', err));
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Abrir YouTube" onPress={openYoutubeVideo} />
        </SafeAreaView>
    );
};

export default OpenYoutube;
