import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LotteryContext } from '../contexts/LotteryContext';
import Ball from '../components/Ball';
import { styles } from './megaStyles';

const MegaSenaScreen: React.FC = () => {
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

    const megaSena = lotteryData?.megasena;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEGA-SENA</Text>
            <FlatList
                data={megaSena?.dezenas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Ball number={item} color="#209869" />}
                horizontal
                contentContainerStyle={styles.numbersContainer}
            />
            <Text style={styles.dateText}>{megaSena?.dataPorExtenso}</Text>
        </View>
    );
};

export default MegaSenaScreen;
