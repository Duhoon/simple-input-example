import logo from './logo.svg';
import './App.css';
import Send from "./component/Send";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center">
        <div className="mt-2 content-width">
          <div className="box-colored" aria-label="title">
            <div className="p-4 text-xl text-center">
              Simple Input Example
            </div>
          </div>
          <Send></Send>
        </div>
      </div>
      <div className="" aria-label="messages-wrapper">
        
      </div>
    </div>
  );
}

export default App;
