import React from 'react';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  // For demo purposes, let's show both pages
  // In a real app, you'd use proper routing
  return (
    <div className="min-h-screen bg-[#f8f7e8]">
      <LoginPage />
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;