
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Projects'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DataContextProvider from './contexts/DataContext'
import LanguageContextProvider from './contexts/LanguageContext'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {

  return (
    <ThemeContextProvider>
    <LanguageContextProvider>
      <DataContextProvider>
        <Navbar />
        <Header />
        <Skills />
        <Profile />
        <Project />
        <Footer />
      </DataContextProvider>
    </LanguageContextProvider>
    </ThemeContextProvider>
  )
}

export default App
