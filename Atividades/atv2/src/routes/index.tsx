import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CaixaProvider } from '../context/index';
import MyDrawer from './drawer.routes';
import InicialScreen from '../screens/inicial';

export default function Routes() {
    const [showInicialScreen, setShowInicialScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInicialScreen(false);
        }, 10000); // 10 segundos

        return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }, []);

    // Função para "pular" a tela inicial
    const handleSkip = () => {
        setShowInicialScreen(false);
    };

    return (
        <NavigationContainer>
            <CaixaProvider>
                {showInicialScreen ? (
                    <InicialScreen onSkip={handleSkip} />
                ) : (
                    <MyDrawer />
                )}
            </CaixaProvider>
        </NavigationContainer>
    );
}
//