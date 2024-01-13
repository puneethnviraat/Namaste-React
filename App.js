import React from 'react';
import { ReactDOM, createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider,  } from 'react-router-dom';

import Main from './src/components/Main';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import About from './src/components/About';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import ResturentMenu from './src/components/ResturentMenu'
import Parent from './src/components/Parent';
const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Main />
      },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/resturent/:id",
          element:<ResturentMenu />
        },
        {
          path:"/parent",
          element:<Parent />
        }
      
    ],
    errorElement:<Error />
  }
  
])

const domroot = document.getElementById('root');
const root = createRoot(domroot);
root.render(<RouterProvider router={appRouter} />);
