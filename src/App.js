import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
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
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  </div>
);
}


export default App;
