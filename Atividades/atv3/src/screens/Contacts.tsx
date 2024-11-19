// src/screens/Contacts.tsx
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useContact } from '../hooks/useContact';
import { RootStackParamList } from '../types';

export const Contacts = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { contacts, fetchContacts } = useContact();

    useEffect(() => {
        // Configurar o botão "+" no header
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddContact')}
                    style={styles.addButton}
                >
                    <Ionicons name="add" size={24} color="#007AFF" />
                </TouchableOpacity>
            ),
        });

        fetchContacts();
    }, [navigation, fetchContacts]);

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.contactItem}
                        onPress={() => navigation.navigate('Location', { contact: item })}
                    >
                        <Text style={styles.contactName}>{item.name}</Text>
                        <Text style={styles.contactAddress}>{item.address}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Nenhum contato cadastrado</Text>
                        <TouchableOpacity
                            style={styles.emptyButton}
                            onPress={() => navigation.navigate('AddContact')}
                        >
                            <Text style={styles.emptyButtonText}>Adicionar Contato</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Botão flutuante alternativo para adicionar contato */}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate('AddContact')}
            >
                <Ionicons name="add" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addButton: {
        marginRight: 15,
    },
    contactItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactName: {
        fontSize: 18,
        fontWeight: '500',
    },
    contactAddress: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    emptyButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
    },
    emptyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});
