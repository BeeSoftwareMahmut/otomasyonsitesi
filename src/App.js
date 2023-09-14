import About from "./Components/About/About";
import Main from "./Components/Main";
import Services from "./Components/Services/Service";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import { ContextProvider} from "./Components/Context/Context";
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    
    <ContextProvider>
      <div>
        <ToastContainer/>
   <Main/>
   </div>
   </ContextProvider>
  

  );
}

export default App;
