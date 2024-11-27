import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RecipeList from './components/RecipeList';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import Login from './components/Login';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado

  const handleLogin = (userData) => {
    setUser(userData); // Atualiza o estado com os dados do usuário
  };

  const handleLogout = () => {
    setUser(null); // Limpa o estado do usuário para realizar o logout
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage user={user} onLogout={handleLogout} />} // Passando onLogout como prop
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

function MainPage({ user, onLogout }) {
  return (
    <div>
      <Header user={user} onLogout={onLogout} /> {/* Passando onLogout */}
      <Hero />
      <Features />
      <SearchForm />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
