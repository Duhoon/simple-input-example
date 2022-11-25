// Components
import Navbar from "./component/Navbar.js";

// Pages
import Plaza from "./page/Plaza";
import Login from "./page/Login";
import Mypage from "./page/Mypage";
import Detail from "./page/Detail";

// Routing Tool
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Plaza/>} /> 
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route 
          path="/detail/:_id" 
          element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
