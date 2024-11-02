import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import theme from '../themes/theme';

interface BallProps {
    number: string;
    color?: string;
}

const Ball: React.FC<BallProps> = ({ number, color = theme.colors.primary }) => {
    return (
        <View style={[styles.circle, { backgroundColor: color }]}>
            <Text style={styles.circleText}>{number}</Text>
        </View>
    );
};

export default Ball;
