// App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Demo from "./components/Demo";
import { Chart } from "chart.js";
import LineChart from "./components/LineChart";
import Over from "./components/Over";
import DropMenu from "./components/DropMenu";

function App() {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };

  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
  };

  return (
    <div onClick={()=>{
      
    }}>
      <Demo
        isMenuOpen1={isMenuOpen1}
        isMenuOpen2={isMenuOpen2}
        isMenuOpen3={isMenuOpen3}
        isMenuOpen4={isMenuOpen4}
        setIsMenuOpen1={setIsMenuOpen1}
        setIsMenuOpen2={setIsMenuOpen2}
        setIsMenuOpen3={setIsMenuOpen3}
        setIsMenuOpen4={setIsMenuOpen4}
      />
    </div>
  );
}

export default App;
