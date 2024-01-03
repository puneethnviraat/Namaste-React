import React from 'react';
import { ReactDOM, createRoot } from 'react-dom/client';
import Main from './src/components/Main';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const domroot = document.getElementById('root');
const root = createRoot(domroot);
root.render(<App />);
