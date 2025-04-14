import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './auth/Login';
import Register from './auth/Register';
//import { SnackbarProvider } from 'notistack';

function App() {
  return (
   // <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route path="/transactions" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
  //  </SnackbarProvider>
  );
}

export default App;