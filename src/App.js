import { Route, Routes } from "react-router-dom"
import './App.css';
import Main from "./components/Main"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      
      <Main />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
