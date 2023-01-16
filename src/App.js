import './App.css'
import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import About from './pages/About';
// import Connect from './pages/Connect';
import Header from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Connect />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
