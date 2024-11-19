import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useContact } from '../hooks/useContact';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const AddContact = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const { addContact } = useContact();

    const searchAddress = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }

            const result = await Location.geocodeAsync(address);
            if (result.length > 0) {
                setLocation({
                    latitude: result[0].latitude,
                    longitude: result[0].longitude,
                });
            }
        } catch (error) {
            console.error('Error geocoding address:', error);
        }
    };

    const handleSave = async () => {
        if (!location) return;
        await addContact({
            name,
            address,
            latitude: location.latitude,
            longitude: location.longitude,
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome do local"
                value={name}
                onChangeText={setName}
            />
            <View style={styles.addressContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Endereço"
                    value={address}
                    onChangeText={setAddress}
                />
                <TouchableOpacity style={styles.searchButton} onPress={searchAddress}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
            {location && (
                <MapView
                    style={styles.map}
                    region={{
                        ...location,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    <Marker coordinate={location} />
                </MapView>
            )}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    addressContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    searchButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    map: {
        flex: 1,
        marginVertical: 10,
    },
});
//