
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Project from './components/Projects'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DataContextProvider from './contexts/DataContext'

function App() {

  return (
    <DataContextProvider>
      <Navbar />
      <Header />
      <Skills />
      <Project />
      <Profile />
      <Footer />
    </DataContextProvider>
  )
}

export default App
