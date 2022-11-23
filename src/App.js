import {useState, useEffect} from "react";
import axios from 'axios';

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

  const [data, setData] = useState([]);
  const serverHost = "http://localhost:4000";


  const sendMessage = async (message)=>{
    message.userId = "@JejuAlrock";
    const requestURL = `${serverHost}/send`;
    const result = await axios.post(requestURL, {message})
    .then(result=>result)
    .catch(err=>err);
  }

  const sendReply = async (message)=>{
    message.userId = "@JejuAlrock";
    const requestURL = `${serverHost}/reply`;
    const result = await axios.post(requestURL, {message})
    .then(result=>result)
    .catch(err=>err);
  }

  useEffect(()=>{
  }, [data]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Plaza sendMessage={sendMessage} sendReply={sendReply}/>} /> 
        <Route path="/mypage" element={<Mypage sendMessage={sendMessage} sendReply={sendReply} />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/detail/:_id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
