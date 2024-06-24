import { NavBar } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Footer } from "./components/footer";
import { Doaction } from "./pages/doaction";
import { Detail } from "./pages/detail";
import Politicas from "./pages/politicas";
import Faq from "./pages/faq";
import DashLogin from "./pages/DashLogin";
import Dash from "./pages/Dash";
import AddHome from "./pages/AddHome";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/doation" element={<Doaction />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/politicas" element={<Politicas />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/dashlogin" element={<DashLogin />}></Route>
        <Route path="/dash" element={<Dash />}></Route>
        <Route path="/dash/add" element={<AddHome />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
