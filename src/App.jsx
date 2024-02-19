import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home"
import About from "./screen/About"
import Services from "./screen/Services"
import './App.css'

function App() {

  return (
    <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Training</h1>
     <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/services"  element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
