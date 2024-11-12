import api from "./api";

export interface Contact {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get<Contact[]>("/contacts");
  return response.data;
};

export const addContact = async (
  contact: Omit<Contact, "id">
): Promise<Contact> => {
  const response = await api.post<Contact>("/contacts", contact);
  return response.data;
};
//
