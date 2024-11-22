import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BACKEND_URL } from '@env';
import { GOOGLE_MAPS_API_KEY } from '@env';

export default function ContactRegistration() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [region, setRegion] = useState({
        latitude: -23.2237, // Coordenadas padrão (Jacareí, SP)
        longitude: -45.9009,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    const [marker, setMarker] = useState<null | { latitude: number; longitude: number }>(null);

    const handleGeocode = async () => {
        if (!address) {
            Alert.alert('Erro', 'Por favor, insira um endereço válido.');
            return;
        }

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address
                )}&key=${GOOGLE_MAPS_API_KEY}`
            );

            const data = await response.json();

            if (data.status === 'OK') {
                const location = data.results[0].geometry.location;
                setRegion({
                    ...region,
                    latitude: location.lat,
                    longitude: location.lng,
                });
                setMarker({
                    latitude: location.lat,
                    longitude: location.lng,
                });
            } else {
                Alert.alert('Erro', 'Não foi possível encontrar o endereço.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um problema ao buscar o endereço.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do local"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Endereço"
                value={address}
                onChangeText={setAddress}
            />
            <Button title="Salvar" onPress={handleGeocode} color="#007BFF" />
            <MapView style={styles.map} region={region}>
                {marker && <Marker coordinate={marker} />}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    map: {
        flex: 1,
        marginTop: 12,
    },
});
