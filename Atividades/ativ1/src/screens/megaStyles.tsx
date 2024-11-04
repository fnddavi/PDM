import { StyleSheet } from 'react-native';
import theme from '../themes/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background, // Cor de fundo padrão (cinza claro)
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.medium,
    },
    title: {
        fontSize: theme.fontSizes.title,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: theme.spacing.medium,
    },
    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: theme.spacing.large,
    },
    numberCircle: {
        backgroundColor: '#209869', // Cor verde específica para Mega-sena
        borderRadius: theme.borderRadius.circle,
        padding: theme.spacing.small,
        marginHorizontal: theme.spacing.small / 2,
    },
    numberText: {
        color: theme.colors.white, // Cor do texto dos números
        fontSize: theme.fontSizes.regular,
    },
    dateText: {
        fontSize: theme.fontSizes.subtitle,
        color: theme.colors.textSecondary,
    },
    loadingText: {
        fontSize: theme.fontSizes.title,
        color: theme.colors.text,
    },
    errorText: {
        fontSize: theme.fontSizes.title,
        color: theme.colors.error,
    },
});
