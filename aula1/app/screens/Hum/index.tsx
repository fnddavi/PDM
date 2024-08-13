import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';

const Hum: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upper} />
            <View style={styles.lower} />
        </View>
    );
};

export default Hum;
