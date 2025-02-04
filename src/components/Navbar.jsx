import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const {theme, toggleTheme} = useTheme();

  return (
    <nav>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Türkçe ye çevir' : 'Switch to English'}
      </button>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;