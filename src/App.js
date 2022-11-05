import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Send from "./component/Send";
import Message from "./component/Message";

function App() {
  const [message, setMessage] = useState("");

  const inputHandler = (e)=>{
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="mt-2 content-width">
          <div className="box-colored" aria-label="title">
            <div className="p-4 text-xl text-center">
              Simple Input Example
            </div>
          </div>
          <Send inputHandler={inputHandler}></Send>
        </div>
      </div>
      <div className="flex justify-center" aria-label="messages-wrapper">
        <div className="content-width">
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
          <Message></Message>
        </div>
      </div>
    </div>
  );
}

export default App;
