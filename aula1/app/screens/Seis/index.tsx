import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import { styles } from './styles';

const Seis: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [resultado, setResultado] = useState<string>('');
    const salvarDados = () => {
        setResultado(`${nome} - ${idade}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textIn}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.textIn}>Idade</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                value={idade}
                onChangeText={setIdade}
                keyboardType="numeric"
            />
            <Button title="SALVAR" onPress={salvarDados} />
            {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
        </View>
    );
};

export default Seis;
