import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const books = [
  { title: 'JSON Básico: Conheça o formato de dados preferido da web', author: 'SMITH, B.', publisher: 'Novatec', year: 2020 },
  { title: 'Python e Django: Desenvolvimento web Moderno e ágil', author: 'MACIEL, F. M. B.', publisher: 'Alta Books', year: 2020 },
  { title: 'Aprenda Django 3 com Exemplos: Crie Aplicações web Profissionais em Python, Começando do Zero', author: 'MELE, A.', publisher: 'Novatec', year: 2020 },
  { title: 'DOMAIN-DRIVEN DESIGN', author: 'EVANS, E.', publisher: 'Alta Books', year: 2020 },
  { title: 'Aprenda Django 3 com Exemplos: Crie Aplicações web Profissionais em Python, Começando do Zero', author: 'MELE, A.', publisher: 'Novatec', year: 2020 }
];

const BookListScreen = () => {
  const renderItem = ({ item }: { item: typeof books[0] }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.publisher}>{item.publisher}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 10,
  },
  card: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    marginBottom: 3,
  },
  publisher: {
    fontSize: 14,
  },
  year: {
    fontSize: 14,
  },
});

export default BookListScreen;
