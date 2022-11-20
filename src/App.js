import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar.js";
import Plaza from "./page/Plaza";
import Login from "./page/Login";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Plaza></Plaza>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
