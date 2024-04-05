import { NavBar } from "./components/header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Footer } from "./components/footer"
import { Doaction } from "./pages/doaction"
import { Detail } from "./pages/detail"
import Politicas from "./pages/politicas"
import Faq from "./pages/faq"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/doation" element={<Doaction/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/politicas" element={<Politicas/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
