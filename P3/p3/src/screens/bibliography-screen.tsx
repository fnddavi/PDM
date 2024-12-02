import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type BibliographyScreenProps = NativeStackScreenProps<RootStackParamList, 'Bibliografia'>;

type Book = {
  course: string;
  title: string;
  author: string;
  publisher: string;
  year: number;
};

const BibliographyScreen: React.FC<BibliographyScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalDisciplines: 0,
    totalBooks: 0,
    oldestBook: '',
    newestBook: '',
  });

  useEffect(() => {
    // Carrega o JSON usando require
    const loadBooks = async () => {
      try {
        const data: Book[] = require('../data/books.json');

        // Calcula as estatísticas
        const coursesSet = new Set(data.map(book => book.course));
        const totalBooks = data.length;

        const sortedByYear = [...data].sort((a, b) => a.year - b.year);
        const oldestBook = sortedByYear[0]?.title || 'N/A';
        const newestBook = sortedByYear[sortedByYear.length - 1]?.title || 'N/A';

        setStats({
          totalDisciplines: coursesSet.size,
          totalBooks,
          oldestBook,
          newestBook,
        });
      } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bibliografia</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Total de disciplinas:</Text>
          <Text style={styles.value}>{stats.totalDisciplines}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Total de livros:</Text>
          <Text style={styles.value}>{stats.totalBooks}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Livro mais velho:</Text>
          <Text style={styles.value}>{stats.oldestBook}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Livro mais novo:</Text>
          <Text style={styles.value}>{stats.newestBook}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ir para Lista de Livros"
            color="#3d76b3"
            onPress={() => navigation.navigate('ListaDeLivros')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    flexShrink: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default BibliographyScreen;
