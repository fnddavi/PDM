import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CepProvider } from './src/contexts/CepContext';
import SearchCep from './src/components/SearchCep';

const App = () => {
  return (
    <CepProvider>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <SearchCep />
      </SafeAreaView>
    </CepProvider>
  );
};

export default App;
