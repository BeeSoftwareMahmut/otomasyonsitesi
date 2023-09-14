import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <div>
          <ToastContainer />
          {/* Ana sayfa için / adresine yönlendirme */}
          <Route path="/" exact component={Main} />
          {/* Hakkında sayfası için /about adresine yönlendirme */}
          <Route path="/about" component={About} />
          {/* Hizmetler sayfası için /services adresine yönlendirme */}
          <Route path="/services" component={Services} />
          {/* İletişim sayfası için /contact adresine yönlendirme */}
          <Route path="/contact" component={Contact} />
          {/* Admin sayfası için /admin adresine yönlendirme */}
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
