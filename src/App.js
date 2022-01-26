import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} exact ></Route>
          <Route path="/login"  element={<Login/>} exact />
          <Route path="/signup"  element={<Register/>}  exact />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
