import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import "./navbar.css";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='container-navbar'>
      <div className='container-switch'>
        <div className='container-darkmode'>
          <label className="switch">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <p>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
        <div>
          <span>|</span>
        </div>
        <div >
          <a href="" onClick={(e) => { e.preventDefault(); toggleLanguage(); }}>
            {language === 'en' ? "TÜRKÇE'YE GEÇ" : 'SWITCH TO ENGLİSH'}
          </a>
        </div>
      </div>
      <div className='links'>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Hire me</a>
      </div>
    </nav>
  );
};

export default Navbar;