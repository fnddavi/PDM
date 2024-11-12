import React, { createContext, useEffect, useState, ReactNode } from "react";
import { Contact, getContacts, addContact } from "../services/contactService";

interface ContactContextProps {
    contacts: Contact[];
    loadContacts: () => void;
    createContact: (contact: Omit<Contact, "id">) => void;
}

export const ContactContext = createContext<ContactContextProps | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const loadContacts = async () => {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts);
    };

    const createContact = async (contact: Omit<Contact, "id">) => {
        const newContact = await addContact(contact);
        setContacts([...contacts, newContact]);
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, loadContacts, createContact }}>
            {children}
        </ContactContext.Provider>
    );
};
//