import React from "react";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <>
      <div>
        <h1>안녕 리엑트</h1>
        <h2>안녕 내이름은 홍길동이야.</h2>
      </div>

      <div>
        <h1>우헿</h1>
        <h2>아니야 아니아니아니야</h2>
      </div>
      <button id="b">r</button>

      <div>
        <Navbar></Navbar>
      </div>
    </>
  );
};

export default App;
