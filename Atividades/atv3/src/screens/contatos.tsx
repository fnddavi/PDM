import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BACKEND_URL } from '@env';

interface Contact {
    id: string;
    name: string;
    address: string;
}

const contacts: Contact[] = [
    { id: '1', name: 'Antonio', address: 'R. Faria Lima, 155 - Jardim Santa Maria, Jacareí - SP, 12328-070, Brasil' },
    { id: '2', name: 'Asf', address: 'R. Faria Lima, 155 - Jardim Santa Maria, Jacareí - SP, 12328-070, Brasil' },
    { id: '3', name: 'Gabriela', address: 'R. Carlos Barattino, 723-833 - Vila Mogilar, Mogi das Cruzes - SP, 08735-600, Brasil' },
    { id: '4', name: 'Henrique', address: 'R. Profa. Inês Michaelá da Silva de Sou, 103 - Jardim Santa Maria, Jacareí - SP, 12328-000' },
    { id: '5', name: 'Maria', address: 'R. Faria Lima, 450 - Jardim Santa Maria, Jacareí - SP, 12328-070' },
    { id: '6', name: 'Pedro', address: 'Av. Avareí, 310 - Jardim Santa Maria, Jacareí - SP, 12328-000' },
];

export default function ContactList() {
    const renderItem = ({ item }: { item: Contact }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
            <TouchableOpacity style={styles.fab}>
                <AntDesign name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    list: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    address: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        width: 56,
        height: 56,
        backgroundColor: '#34a853',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
