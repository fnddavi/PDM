
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b6b6b6',
    },
    title: {
        display: 'flex',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fef'
    },
    msg: {
        fontSize: 20,
        marginTop: 20,
        color: '#fef'
    },
    rowButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
    },
    button: {
        backgroundColor: '#FFA500',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonLabel: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default styles;
