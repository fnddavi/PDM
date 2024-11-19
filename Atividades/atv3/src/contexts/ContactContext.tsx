import React, { createContext, useState, useCallback } from 'react';
import { Contact } from '../types';
import api from '../services/api';

interface ContactContextData {
    contacts: Contact[];
    loading: boolean;
    fetchContacts: () => Promise<void>;
    addContact: (contact: Omit<Contact, 'id'>) => Promise<void>;
}

export const ContactContext = createContext<ContactContextData>({} as ContactContextData);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchContacts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get<Contact[]>('/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addContact = useCallback(async (contact: Omit<Contact, 'id'>) => {
        try {
            setLoading(true);
            const response = await api.post<Contact>('/contacts', contact);
            setContacts(prev => [...prev, response.data]);
        } catch (error) {
            console.error('Error adding contact:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, loading, fetchContacts, addContact }}>
            {children}
        </ContactContext.Provider>
    );
};
//