import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight, // Adiciona o padding para evitar a StatusBar
    },
    crimsonContainer: {
        flex: 0.5,
        backgroundColor: 'crimson',
        flexDirection: 'row', // Organiza os filhos em linha
    },
    limeBox: {
        flex: 0.5,
        backgroundColor: 'lime', // Nova cor
        justifyContent: 'center', // Centraliza a imagem verticalmente
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    aquamarineContainer: {
        flex: 0.5,
        backgroundColor: 'aquamarine',
        flexDirection: 'column', // Organiza os filhos em coluna
    },
    tealBox: {
        flex: 0.5,
        backgroundColor: 'teal', // Nova cor
        justifyContent: 'center', // Centraliza a imagem verticalmente
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    skyblueBox: {
        flex: 0.5,
        backgroundColor: 'skyblue', // Nova cor
        justifyContent: 'center', // Centraliza a imagem verticalmente
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    salmonBox: {
        flex: 0.5,
        backgroundColor: 'salmon',
        justifyContent: 'center', // Centraliza a imagem verticalmente
        alignItems: 'center', // Centraliza a imagem horizontalmente
    },
    originalImage: {
        width: 400, // Reduz a largura da imagem
        height: 400, // Reduz a altura da imagem
    },
    reducedImage: {
        width: 200, // Reduz a largura da imagem
        height: 200, // Reduz a altura da imagem
    },
});
