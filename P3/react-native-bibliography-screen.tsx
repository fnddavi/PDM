import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BibliographyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bibliografia</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Total de disciplinas:</Text>
          <Text style={styles.value}>40</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Total de livros:</Text>
          <Text style={styles.value}>328</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Livro mais velho:</Text>
          <Text style={styles.value}>Estruturas de Dados</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Livro mais novo:</Text>
          <Text style={styles.value}>JSON Básico: Conheca o formato de dados preferido da web (2020)</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BibliographyScreen;
