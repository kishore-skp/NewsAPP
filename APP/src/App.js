// App.js
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import routes from './routetable';
import HeaderComponent from './components/headerComponent';
import { FooterComponent } from './components/footerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes>
          {routes.map(({ path, component: C, title }) => (
            <Route 
              key={path} 
              path={path} 
              element={<C title={title} />} // Use JSX directly here
            />
          ))}
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
