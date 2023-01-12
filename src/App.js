import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Login from "../src/pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { MENUS, users } from "./util/data";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function LoginCheck(userName, password) {
   
      if (users.map((user) => user.userName === userName && user.password === password)) {
        console.log("u are logged in")
        setIsLoggedIn(true)
      } else {
        console.log("error")
      }
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={isLoggedIn ? <About /> : <Login logState = {LoginCheck }/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
