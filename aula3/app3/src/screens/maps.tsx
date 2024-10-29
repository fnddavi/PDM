import React from 'react';
import { View, Button, Alert, Linking, SafeAreaView } from 'react-native';
import styles from "./styles";


const Maps: React.FC = () => {
    const openMap = () => {
        const latitude = -23.295122027241426;
        const longitude = -45.967088557159585;
        const label = "Fatec Jacareí";
        const url =
            `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id
=${encodeURIComponent(label)}`;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    Alert.alert('Erro', 'Não foi possível abrir o Google Maps.');
                }
            })
            .catch((err) =>
                console.error('Erro ao tentar abrir o aplicativo de mapas', err));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Google Maps" onPress={openMap} />
            </View>
        </SafeAreaView>
    );
};
export default Maps;