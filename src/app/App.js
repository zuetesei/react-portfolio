import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Header from '../components/Header';
// import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div> */}
      <ScrollToTop>
        <Header />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           {/* <Route path='/projects' element={<Projects />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Connect />} /> */}
//         </Routes>
//         {/* <Footer /> */}
//       </Router>
//     </div>
//   );
// }

// export default App;
