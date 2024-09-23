import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

interface CepContextType {
    cepData: any;
    searchCep: (cep: string) => Promise<void>;
}

export const CepContext = createContext<CepContextType | undefined>(undefined);

export const CepProvider: React.FC = ({ children }) => {
    const [cepData, setCepData] = useState(null);

    const searchCep = async (cep: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/cep/${cep}`);
            setCepData(response.data);
        } catch (error) {
            console.error("Erro ao buscar o CEP", error);
        }
    };

    return (
        <CepContext.Provider value={{ cepData, searchCep }}>
            {children}
        </CepContext.Provider>
    );
};

export const useCep = () => {
    const context = useContext(CepContext);
    if (!context) {
        throw new Error("useCep deve ser usado dentro de um CepProvider");
    }
    return context;
};
