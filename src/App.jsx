import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Nav from './Components/Home/Nav'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  )
}

export default App
