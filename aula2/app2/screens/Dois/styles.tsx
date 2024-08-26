import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    metadeSuperior: {
        flex: 0.5,
        backgroundColor: 'crimson',
        flexDirection: 'row',
    },
    metadeEsquerda: {
        flex: 0.5,
        backgroundColor: 'lime',
    },
    metadeDireita: {
        flex: 0.5,
        backgroundColor: 'aquamarine',
    },
    metadeInferior: {
        flex: 0.5,
        backgroundColor: 'salmon',
    },
});
