import "./styles/reset.css"
import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {ScrollToTop} from "./utils/ScrollToTop"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Contacts from "./pages/Contacts";
import Projects from "./pages/projects/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
