import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#333',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffd000',
    color: '#333',

  },
  textIn: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  resultado: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
});