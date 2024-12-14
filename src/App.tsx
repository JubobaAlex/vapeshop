import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import './App.css'
function App() {
  return (
    <div>
      <header>
      <div className="headers">
        <a className="home"  href="/">Главная</a>
      </div>
      </header>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
