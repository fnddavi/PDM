import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const HomeScreen = () => {
    const handlePress = () => {
        Alert.alert('Botão pressionado!', 'Você clicou no botão Iniciar.');
        // Aqui você pode implementar a navegação, por exemplo:
        // navigation.navigate('ProximaTela');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App!</Text>
            <View style={styles.buttonContainer}>
                <Button title="Iniciar" onPress={handlePress} color="#007BFF" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAF6FF', // Cor de fundo semelhante à da imagem
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
    },
    buttonContainer: {
        width: '60%', // Largura ajustável do botão
    },
});

export default HomeScreen;
