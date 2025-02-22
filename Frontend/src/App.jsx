import './App.css';
import { TodoWrapper } from './components/TodoWrapper.jsx';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";

function App() {
  return (
      <div className="App" style={{ backgroundColor: "#8758ff" }}>
      <Router>
       
        <Routes>
          <Route path="/" exact element={<TodoWrapper />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      </div>

  );
}

export default App;
