import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home/Home.js'));
const About = lazy(() => import('./Pages/About/About.js'));
const ContactUs = lazy(() => import('./Pages/ContactUs/ContactUs.js'));
const Services = lazy(() => import('./Pages/Services/Services.js'));
const ErrorPage = lazy(() => import('./Pages/Error/ErrorPage.js'));

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/404" element={<ErrorPage/>} />
          {/* <Navigate to="/404"/> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
