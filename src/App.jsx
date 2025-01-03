import React from 'react';
import './assets/styles.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter as Router } from 'react-router-dom';



// import Header from './components/Header1/Header';
import HomeSection from './components/Home-Section/HomeSection';
import CardsSection from './components/Cards-Section/CardsSection';
import LocationSection from './components/Location-Section/LocationSection';
import BookingSection from './components/Booking-Section/BookingSection';
import PackagesSection from './components/Packages-Section/PackagesSection';
import User from './components/user/User';
import BlogSection from './components/Blog-Section/BlogSection';
import Footer from './components/footer/Footer';



function App() {
  

  return (
    <Router>
            <HomeSection />
            <CardsSection />
            <LocationSection />
            <BookingSection />
            <PackagesSection />
            <User/>
            <BlogSection/>
            <Footer />
    </Router>
  )
}

export default App
