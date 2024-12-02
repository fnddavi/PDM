import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BibliographyScreen from './src/screens/bibliography-screen';
import BookListScreen from './src/screens/bookList-screen';
import AuthorBooksScreen from './src/screens/authorBooks-screen';

export type RootStackParamList = {
  Bibliografia: undefined;
  ListaDeLivros: undefined;
  LivrosDoAutor: { author: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bibliografia">
        <Stack.Screen
          name="Bibliografia"
          component={BibliographyScreen}
          options={{ title: 'Bibliografia' }}
        />
        <Stack.Screen
          name="ListaDeLivros"
          component={BookListScreen}
          options={{ title: 'Lista de Livros' }}
        />
        <Stack.Screen
          name="LivrosDoAutor"
          component={AuthorBooksScreen}
          options={{ title: 'Livros do Autor' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//