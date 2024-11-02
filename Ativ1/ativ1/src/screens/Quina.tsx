import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LotteryContext } from '../contexts/LotteryContext';
import { styles } from './megaStyles';

const QuinaScreen: React.FC = () => {
    const { megaSena, loading } = useContext(LotteryContext);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEGA-SENA</Text>
            <FlatList
                data={megaSena?.dezenas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{item}</Text>
                    </View>
                )}
                horizontal
                contentContainerStyle={styles.numbersContainer}
            />
            <Text style={styles.dateText}>{megaSena?.dataPorExtenso}</Text>
        </View>
    );
};

export default QuinaScreen;
