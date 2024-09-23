import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useCep } from '../contexts/CepContext';

const SearchCep: React.FC = () => {
    const [inputCep, setInputCep] = useState('');
    const { cepData, searchCep } = useCep();

    const handleSearch = () => {
        if (inputCep.length === 8) {
            searchCep(inputCep);
        } else {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Digite o CEP"
                value={inputCep}
                onChangeText={setInputCep}
                keyboardType="numeric"
                style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                }}
            />
            <Button title="Buscar CEP" onPress={handleSearch} />
            {cepData && (
                <View style={{ marginTop: 20 }}>
                    <Text>Logradouro: {cepData.logradouro}</Text>
                    <Text>Bairro: {cepData.bairro}</Text>
                    <Text>Localidade: {cepData.localidade}</Text>
                    <Text>UF: {cepData.uf}</Text>
                </View>
            )}
        </View>
    );
};

export default SearchCep;
