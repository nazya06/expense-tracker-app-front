import API from './api';

export const getTransactions = async () => {
  try {
    const response = await API.get('/auth/dashboard'); 
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch transactions' };
  }
};