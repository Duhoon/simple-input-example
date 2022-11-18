import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Navbar from "./component/Navbar.js";
import Send from "./component/Send";
import Message from "./component/Message";
import axios from 'axios';

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

  const getMessages =  async ()=>{
    const result = await axios.get(serverHost)
    .then(result=>result)
    .catch(err=> err);

    if (result) setData(result.data);
    else return new Error();
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
      <div className="wrapper" aria-label="plaza">
        <div className="mt-2 content-width">
          <div className="box-colored" aria-label="title">
            <div className="p-4 text-xl text-center">
              ZET
            </div>
          </div>
          <div className="mt-2 content-width border-b-2 p-4">
            <Send sendMessage={sendMessage}></Send>
          </div>
        </div>
        <div className="content-width">
            {data.map(message=>{
              return <Message message={message} key={message._id} removeMessage={removeMessage} updateMessage={updateMessage}></Message>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
