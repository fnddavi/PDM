import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from "./styles";

type Contact = {
  id: string;
  name: string;
  phoneNumbers?: { number: string }[];
  emails?: { email: string }[];
};

export default function ContactsComponent() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
                });
                if (data.length > 0) {
                    setContacts(data as Contact[]);
                }
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to contacts</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
                            <Text key={index}>{phone.number}</Text>
                        ))}
                        {item.emails && item.emails.map((email, index) => (
                            <Text key={index}>{email.email}</Text>
                        ))}
                    </View>
                )}
            />
        </View>
    );
}
