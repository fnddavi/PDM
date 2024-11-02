import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#209869',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    circleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 16,
        color: '#666',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
    },
});
