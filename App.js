import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/studentlogin/LoginPage/LoginPage';
import Login02 from './components/studentregister/Login02/Login02';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Login02 />} />
      </Routes>
    </Router>
  )
}
export default App;