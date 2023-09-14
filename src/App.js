import React from 'react';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About/About';
import Services from './Components/Services/Service';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';
import { ContextProvider } from './Components/Context/Context';
import { ToastContainer } from 'react-toastify';

function App() {

  
  return (
    <ContextProvider>
      <Router>
        
      <ToastContainer />
        <Routes>
        
          {/* Ana sayfa için / adresine yönlendirme */}
          <Route path="/" exact element={<Main/>} />
          {/* Hakkında sayfası için /about adresine yönlendirme */}
          <Route path="/about" element={<About/>} />
          {/* Hizmetler sayfası için /services adresine yönlendirme */}
          <Route path="/services" element={<Services/>} />
          {/* İletişim sayfası için /contact adresine yönlendirme */}
          <Route path="/contact" element={<Contact/>} />
          {/* Admin sayfası için /admin adresine yönlendirme */}
          <Route path="/admin" element={<Admin/>} />
        
    
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
