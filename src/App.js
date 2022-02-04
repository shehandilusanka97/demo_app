import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation'
import { Routes, Route} from "react-router-dom";
import About from './Components/About';
import AddStudent from './pages/AddStudent';



function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/addStudent" element={<AddStudent/>} />
      </Routes>

    </div>

  );
}

export default App;
  