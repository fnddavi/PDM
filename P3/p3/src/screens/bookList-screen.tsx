import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type BookListScreenProps = NativeStackScreenProps<RootStackParamList, 'ListaDeLivros'>;

type Book = {
  course: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
};

const BookListScreen: React.FC<BookListScreenProps> = ({ navigation }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data: Book[] = require('../data/books.json');
        setBooks(data);
      } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  // Função para renderizar autores separados por ';'
  const renderAuthors = (authors: string) => {
    const authorArray = authors.split(';').map(author => author.trim());
    return (
      <View style={styles.authorsContainer}>
        {authorArray.map((author, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('LivrosDoAutor', { author })}
          >
            <Text style={styles.author}>{author}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderItem = ({ item }: { item: Book }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{item.title}</Text>
        {renderAuthors(item.author)}
        <Text style={styles.publisher}>Editora: {item.publisher}</Text>
        <Text style={styles.year}>Ano: {item.year}</Text>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Carregando livros...</Text>
      </View>
    );
  }

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
  authorsContainer: {
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
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
