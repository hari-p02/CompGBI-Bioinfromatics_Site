import './App.css';
import Navbar from './componenets/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;