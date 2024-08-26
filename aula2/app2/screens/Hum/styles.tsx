import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'lightblue',
    },
    upper: {
        flex: 0.5,
        backgroundColor: 'crimson',
    },
    lower: {
        flex: 0.5,
        backgroundColor: 'salmon',
    },
});

