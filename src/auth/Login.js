import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import { login } from '../services/authService'; // adjust path as needed

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-page">
      <AuthForm 
        type="login" 
        onSubmit={handleSubmit}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p className="mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Login;
