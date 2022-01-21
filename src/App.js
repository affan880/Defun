import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Generator from './Pages/Generator/Generator';
import Navbar from './Components/Navbar/Navbar';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
       
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Generator" element={<Generator />} />
    <Route path="/Explore" element={<Explore />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
