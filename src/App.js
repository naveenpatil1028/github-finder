
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { GithubProvider } from './context/Github/GithubContext';


function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <main className='container mt-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </GithubProvider>

  );
}

export default App;
