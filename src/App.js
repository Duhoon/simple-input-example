import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

// Components
import Navbar from "./component/Navbar.js";

// Pages
import Plaza from "./page/Plaza";
import Login from "./page/Login";
import Mypage from "./page/Mypage";
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

    if(result.status === 200) {
      getMessages();
    }
    else console.log(result);
  }

  const sendReply = async (message)=>{

  }

  const getMessages = ()=>{
    axios.get(serverHost)
    .then(result=>{
        setData(result.data);
    })
    .catch(err=>{
        return new Error(err);
    });
  }

  const updateMessage = async (message)=>{
    const requestURL = `${serverHost}/update`;
    const result = await axios.post(requestURL, {message})
    .then(result=>result)
    .catch(err=>err);

    if(result.status === 200){
      getMessages();
    }
    else console.log(result);
  }

  const removeMessage = async (messageId)=>{
    const requestURL = `${serverHost}/remove`;
    const result = await axios.post(requestURL, {message: {messageId}})
    .then(result=>result)
    .catch(err=>err);

    if (result) getMessages();
    else return new Error();
  }

  useEffect(()=>{
    getMessages();
  }, [])

  useEffect(()=>{
    let count = 0;
    return ()=>{
      count++;
      console.log(count)
    }
  }, [data]);


  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Plaza data={data} sendMessage={sendMessage} removeMessage={removeMessage} updateMessage={updateMessage}></Plaza>}></Route>
        <Route path="/mypage" element={<Mypage data={data} sendMessage={sendMessage} removeMessage={removeMessage} updateMessage={updateMessage}></Mypage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
