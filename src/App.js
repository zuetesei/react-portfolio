import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
// import Projects from './pages/Projects';
// import ProjectDisplay from './pages/ProjectDisplay';

import Nav from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/projects' element={<Projects />} /> */}
          {/* <Route path='/projects/:id' element={<ProjectDisplay />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
