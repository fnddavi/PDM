export interface Contact {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
}

export type RootStackParamList = {
  Welcome: undefined;
  Contacts: undefined;
  AddContact: undefined;
  Location: { contact: Contact };
};

