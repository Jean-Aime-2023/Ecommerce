import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Products from './pages/Products';
import Product from './pages/Product';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 1st layout */}
        <Route path="/" element={<Landing />} />

        {/* 2nd layout */}
        <Route
          element={
            <div className="min-h-screen flex flex-col relative">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="contact" element={<Contact />} />
                  <Route path="about" element={<About />} />
                  <Route path="products" element={<Products />} />
                  <Route path="home/product" element={<Product />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        >
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="home/product" element={<Product />} />
        </Route>

        {/* 3rd layout */}
        <Route
          element={
            <div className="min-h-screen flex flex-col relative">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="signup" element={<Signup />} />
                  <Route path="signin" element={<Signin />} />
                </Routes>
              </main>
            </div>
          }
        >
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
}
