import React from "react";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contect from "./components/Pages/Contect";
import Project from "./components/Pages/Project";
import { BrowserRouter as Router, Route } from "react-router-dom";
// 위에 as 는 뭐로 부르겠다 명칭을 바꾸는 것.
// 한 페이지 씩 보이는 것을 "라우팅 한다" 라고 한다.
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Project" exact component={Project} />
        <Route path="/Contect" exact component={Contect} />
      </Router>
    </>
  );
};

export default App;
