import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Testimonial from './pages/Testimonial';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/service' element={<Services /> } />
          <Route path='/team' element={<Team /> } />
          <Route path='/project' element={<Projects /> } />
          <Route path='/testimonial' element={<Testimonial /> } />
          <Route path='/feature' element={<Feature /> } />
          <Route path='/contact' element={<Contact /> } />
          <Route path='/about' element={<About /> } />
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
