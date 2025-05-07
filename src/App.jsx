import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Load from "./Load";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (


    <div>
      <Load />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App


// import gsap from "gsap"
// import { useEffect } from "react";

// function Loader() {
//     useEffect(() => {
//         gsap.fromTo(".left__side", 
//           { x: 0 }, 
//           { x: "-100%", delay: 1, duration: 0.5 } // დამატებული duration
//         );
//         gsap.fromTo(".right__side", 
//           { x: 0 }, 
//           { x: "100%", delay: 1, duration: 0.5 } // დამატებული duration
//         );
//       }, []);
//     return (
//         <div className="loader">
//             <div className="left__side"></div>
//             <div className="right__side"></div>
//         </div>
//     )
// }

// export default Loader