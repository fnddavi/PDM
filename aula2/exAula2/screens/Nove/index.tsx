import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';

const Nove: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [role, setRole] = useState<string>('manager');
    const [submittedEmail, setSubmittedEmail] = useState<string>('');
    const [submittedPassword, setSubmittedPassword] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [submittedRole, setSubmittedRole] = useState<string>('');

    const handleLogin = () => {
        setSubmittedEmail(email);
        setSubmittedPassword(senha);
        setSubmittedRole(role);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
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

                <Text style={styles.textIn}>Confirmar Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry={true}
                    maxLength={8}
                />

                <Text style={styles.textIn}>Escolha seu papel</Text>
                <Picker
                    selectedValue={role}
                    onValueChange={(itemValue) => setRole(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Administrador" value="admin" />
                    <Picker.Item label="Gestor" value="manager" />
                    <Picker.Item label="Usuário" value="user" />
                </Picker>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.textIn}>Logar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.textIn}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                {submittedEmail !== "" && submittedPassword !== "" && (
                    <View>
                        <Text
                            style={styles.textIn}
                        >{`${submittedEmail} - ${submittedPassword}  ${confirmarSenha}  `}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Nove;
