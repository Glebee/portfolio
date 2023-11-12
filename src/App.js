import "./styles/reset.css"
import "./styles/main.css"


import Contacts from "./components/contacts/Contacts";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
