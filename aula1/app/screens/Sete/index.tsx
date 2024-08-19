import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import { styles } from './styles';

const Sete: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [resultado, setResultado] = useState<string>('');

    const logar = () => {
        setResultado(`Logar com: ${email} - Senha: ${senha}`);
    };

    const cadastrar = () => {
        setResultado(`Cadastrar: ${email} - Senha: ${senha}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textIn}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="e-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
            />
            <Text style={styles.textIn}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                maxLength={8}
            />
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={logar}>
                    <Text style={styles.textIn}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrar}>
                    <Text style={styles.textIn}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
        </SafeAreaView>
    );
};

export default Sete;

