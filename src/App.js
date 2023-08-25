import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <div className="flex">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add routes for other pages here */}
        </Routes>
      </div>
    </div>
  </div>
);
}


export default App;
