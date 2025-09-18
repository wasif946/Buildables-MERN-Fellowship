import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MultiStepForm from './components/form/MultiStepForm';

// Placeholder components for previous tasks
const Home = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold">Home Page</h1>
  </div>
);
const Users = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold">Users Page</h1>
  </div>
);
const Theme = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold">Theme Page</h1>
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navigation Links with corrected spacing */}
      <nav className="p-4 bg-gray-800 text-white shadow-lg">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-lg hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/users" className="text-lg hover:text-blue-400 transition-colors">Users</Link>
          </li>
          <li>
            <Link to="/form" className="text-lg hover:text-blue-400 transition-colors">Form</Link>
          </li>
        </ul>
      </nav>

      {/* Correct Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}
