import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import style from "./components/app.module.css";
import Characters from "./components/Characters/Characters";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import DetailCharacters from "./components/DetailCharacters/DetailCharacters.jsx";

function App() {
  return (
    <div className={style.app}>
      <Nav />
      <Routes>
        <Route exact path="" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="detail/:id" element={<DetailCharacters />} />
      </Routes>
    </div>
  );
}

export default App;
