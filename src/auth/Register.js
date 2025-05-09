// src/auth/Register.js
import React from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
    <h2>Register</h2>
    <AuthForm type="register" />
  </div>
);

<Link to="/" style={{ display: 'block', marginTop: '20px' }}>
  Back to Dashboard
</Link>

export default Register;