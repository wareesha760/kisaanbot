import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/landing';
import RegisterPage from './pages/RegisterPage';
import Weather from './pages/weather';


function App() {
  return (
    <>
      {/* Background image wrapper */}
      <div
       className="min-h-screen bg-cover bg-[url('/bg5.jpg')] bg-center bg-no-repeat">
        
      
        {/* Optional overlay */}
        <div className=" bg-opacity-80 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/weather" element={ <Weather/>} />

          </Routes>
          <Footer />
        </div>
      </div>
      </>
  );
}

export default App;
