import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LotteryContext } from '../contexts/LotteryContext';
import Ball from '../components/Ball';
import { styles } from './timemaniaStyles';

const TimemaniaScreen: React.FC = () => {
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

    const timemania = lotteryData?.timemania;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TIMEMANIA</Text>
            <FlatList
                data={timemania?.dezenas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Ball number={item} color={styles.numberCircle.backgroundColor} />}
                horizontal
                contentContainerStyle={styles.numbersContainer}
            />
            <Text style={styles.dateText}>{timemania?.dataPorExtenso}</Text>
        </View>
    );
};

export default TimemaniaScreen;
