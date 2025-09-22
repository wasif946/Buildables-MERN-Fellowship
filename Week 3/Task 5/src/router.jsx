import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MultiStepForm from './components/form/MultiStepForm';
import Profile from './components/profile/Profile';

// Placeholder components for previous tasks
const Home = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6'
  }}>
    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Home Page</h1>
  </div>
);

const Users = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6'
  }}>
    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Users Page</h1>
  </div>
);

const Theme = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6'
  }}>
    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Theme Page</h1>
  </div>
);

export default function AppRouter() {
  const navStyle = {
    padding: '1.5rem',
    backgroundColor: '#1f2937',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const linkStyle = {
    fontSize: '1.125rem',
    fontWeight: '500',
    textDecoration: 'none',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s',
    marginRight: '2rem',
    display: 'inline-block'
  };

  const lastLinkStyle = {
    ...linkStyle,
    marginRight: '0'
  };

  return (
    <BrowserRouter>
      {/* Navigation with guaranteed spacing */}
      <nav style={navStyle}>
        <div style={containerStyle}>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = '#60a5fa';
              e.target.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'white';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/users" 
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = '#60a5fa';
              e.target.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'white';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Users
          </Link>
          
          <Link 
            to="/form" 
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = '#60a5fa';
              e.target.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'white';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Form
          </Link>
          
          <Link 
            to="/profile" 
            style={lastLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = '#60a5fa';
              e.target.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'white';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Profile
          </Link>
        </div>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}