import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col relative">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/home" element={<Landing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Signin />} />
                  <Route path="/home/product" element={<Signin />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
