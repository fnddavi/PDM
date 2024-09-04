import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 270,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  containerButton: {
    marginBottom: 4,
    maxWidth: 270,
    maxHeight: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#ffd000',
    color: '#333',

  },
  textIn: {
    fontSize: 15,
    color: '#6e6a3b',
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#333',
},
  resultado: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
});