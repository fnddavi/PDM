import { StyleSheet } from 'react-native';
import theme from '../themes/theme';


export const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: theme.borderRadius.circle,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: theme.spacing.small,
    },
    circleText: {
        color: theme.colors.white,
        fontSize: theme.fontSizes.regular,
        fontWeight: 'bold',
    },
});
