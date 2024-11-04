import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LotteryContext } from '../contexts/LotteryContext';
import Ball from '../components/Ball';
import { styles } from './quinaStyles';

const QuinaScreen: React.FC = () => {
    const { lotteryData, loading, error } = useContext(LotteryContext);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const quina = lotteryData?.quina;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QUINA</Text>
            <FlatList
                data={quina?.dezenas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Ball number={item} color={styles.numberCircle.backgroundColor} />}
                horizontal
                contentContainerStyle={styles.numbersContainer}
            />
            <Text style={styles.dateText}>{quina?.dataPorExtenso}</Text>
        </View>
    );
};

export default QuinaScreen;
