import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 3000,
});


const fetchTransactions = async () => {
  try {
    const response = await API.get('/transactions');
    console.log('✅ Using live backend data');
    return response.data;
  } catch (err) {
    console.error('API Error:', err);
    

    if (err.code === 'ECONNABORTED' || !err.response) {
      console.warn('⚠️ Using mock data (backend unavailable)');
      return [
        { id: 1, amount: 100, category: "Food" },
        { id: 2, amount: 200, category: "Transport" },
      ];
    }
    

    throw err;
  }
};

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError('Failed to load transactions');
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) return <div>Loading transactions...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
      {transactions.map(transaction => (
  <div key={transaction.id}> 
    <span>{transaction.Category?.name}</span> 
    <span>${transaction.amount}</span>
  </div>
))}
      </ul>
    </div>
  );
}

export default TransactionList;