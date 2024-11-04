import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface BallProps {
    number: string;
    color?: string;
}

const Ball: React.FC<BallProps> = ({ number, color }) => {
    return (
        <View style={[styles.circle, { backgroundColor: color }]}>
            <Text style={styles.circleText}>{number}</Text>
        </View>
    );
};

export default Ball;
