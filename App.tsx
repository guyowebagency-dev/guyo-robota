
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QualificationPage from './pages/QualificationPage';
import QualificationResultPage from './pages/QualificationResultPage';
import BookingPage from './pages/BookingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qualify" element={<QualificationPage />} />
        <Route path="/result" element={<QualificationResultPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
