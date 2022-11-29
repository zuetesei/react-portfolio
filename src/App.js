import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ContactForm from './pages/ContactForm';
import Nav from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactForm />} /> */}
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
