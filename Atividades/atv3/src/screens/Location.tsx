import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList, Contact } from '../types';

type LocationRouteProp = RouteProp<RootStackParamList, 'Location'>;

export const Location = () => {
    const route = useRoute<LocationRouteProp>();
    const contact = route.params.contact;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: contact.latitude,
                    longitude: contact.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: contact.latitude,
                        longitude: contact.longitude,
                    }}
                    title={contact.name}
                    description={contact.address}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
//