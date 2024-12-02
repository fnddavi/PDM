import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type AuthorBooksScreenProps = NativeStackScreenProps<RootStackParamList, 'LivrosDoAutor'>;

type Book = {
  course: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
};

const AuthorBooksScreen: React.FC<AuthorBooksScreenProps> = ({ route }) => {
  const { author } = route.params;
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data: Book[] = require('../data/books.json');

        // Filtrar livros pelo autor clicado e remover duplicados
        const filteredBooks = data.filter(book =>
          book.author.split(';').map(a => a.trim()).includes(author)
        );
        const uniqueBooks = Array.from(new Map(filteredBooks.map(book => [book.title, book])).values());

        setBooks(uniqueBooks);
      } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
      }
    };

    loadBooks();
  }, [author]);

  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>Autor(es): {item.author}</Text>
      <Text style={styles.publisher}>Editora: {item.publisher}</Text>
      <Text style={styles.year}>Ano: {item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Livros de {author}</Text>
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
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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

export default AuthorBooksScreen;
