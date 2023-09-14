import React from 'react';
import {  createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About/About';
import Services from './Components/Services/Service';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';
import { ContextProvider } from './Components/Context/Context';
import { ToastContainer } from 'react-toastify';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
  return (
    <ContextProvider>
      
        <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
        
    </ContextProvider>
  );
}

export default App;
