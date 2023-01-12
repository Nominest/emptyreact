import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { MENUS, users } from "./util/data";

function App() {
  function LoginCheck(userName, password) {}
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
