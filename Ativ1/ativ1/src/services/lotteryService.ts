import axios from 'axios';

const BASE_URL = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados';

export const fetchLotteryResults = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os resultados da loteria:', error);
        throw error;
    }
};
