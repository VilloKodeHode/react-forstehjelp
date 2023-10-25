
import { useState } from 'react'
import './App.css'
import { MainContent } from './components/mainContent/mainContent'
import { Footer } from './components/navigation/footer'
import { NavBar } from './components/navigation/navbar'

function App() {
  const [theme, setTheme] = useState("light")
  const navText = 'This text is from app.jsx!'


  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <div><p>HALLA</p></div>
      <MainContent navText={navText} theme={theme} />
      <Footer theme={theme} />

    </>
  )
}

export default App
