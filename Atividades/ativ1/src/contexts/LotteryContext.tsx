import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchLotteryResults } from '../services/lotteryService';

interface LotteryData {
    megasena?: {
        acumulado: boolean;
        concursoEspecial: boolean;
        dataApuracao: string;
        dataPorExtenso: string;
        dataProximoConcurso: string;
        dezenas: string[];
        numeroDoConcurso: number;
        quantidadeGanhadores: number;
        valorEstimadoProximoConcurso: number;
        valorPremio: number;
    };
    quina?: {
        acumulado: boolean;
        concursoEspecial: boolean;
        dataApuracao: string;
        dataPorExtenso: string;
        dataProximoConcurso: string;
        dezenas: string[];
        numeroDoConcurso: number;
        quantidadeGanhadores: number;
        valorEstimadoProximoConcurso: number;
        valorPremio: number;
    };
    timemania?: {
        acumulado: boolean;
        concursoEspecial: boolean;
        dataApuracao: string;
        dataPorExtenso: string;
        dataProximoConcurso: string;
        dezenas: string[];
        numeroDoConcurso: number;
        quantidadeGanhadores: number;
        valorEstimadoProximoConcurso: number;
        valorPremio: number;
    };
}

interface LotteryContextProps {
    lotteryData: LotteryData | null;
    loading: boolean;
    error: string | null;
}

export const LotteryContext = createContext<LotteryContextProps>({
    lotteryData: null,
    loading: true,
    error: null,
});

interface LotteryProviderProps {
    children: ReactNode;
}

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
    const [lotteryData, setLotteryData] = useState<LotteryData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLotteryResults();
                setLotteryData(data);
            } catch (error) {
                setError('Erro ao carregar os dados da loteria');
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    return (
        <LotteryContext.Provider value={{ lotteryData, loading, error }}>
            {children}
        </LotteryContext.Provider>
    );
};
