// import {BrowserRouter as } from 'react-router-dom'
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
