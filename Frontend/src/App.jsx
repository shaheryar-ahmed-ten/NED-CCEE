import './App.css';
import { TodoWrapper } from './components/TodoWrapper.jsx';
import Button from "react-bootstrap/Button";

function App() {
  return (
      <div className="App" style={{ backgroundColor: "#8758ff" }}>
        <Button variant="primary" size="lg" className="custom-button">
          Sign Up
      </Button>
      <Button variant="primary" size="lg" className="custom-button">
          Login
        </Button>
        <TodoWrapper />
      </div>

  );
}

export default App;
