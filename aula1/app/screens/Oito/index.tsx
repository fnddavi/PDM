import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';

const Oito: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [submittedEmail, setSubmittedEmail] = useState<string>('');
    const [submittedPassword, setSubmittedPassword] = useState<string>('');

    const handleLogin = () => {
        setSubmittedEmail(email);
        setSubmittedPassword(senha);
    }

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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textIn}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textIn}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>

            {submittedEmail !== "" && submittedPassword !== "" && (
                <View>
                    <Text
                        style={styles.textIn}
                    >{`${submittedEmail} - ${submittedPassword} `}</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Oito;
