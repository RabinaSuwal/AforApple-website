import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import BlogsSection from './components/BlogsSection';
import Card from './components/Card';
import CurriculumPage from './components/CurriculumPage';
import Experts from './components/Experts';
import FAQ from './components/FAQ';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageSwiper from './components/ImageSwiper';
import KidsEducation from './components/KidsEducation';
import Main from './components/Main';
import Navbar from './components/Navbar';
import OurInsta from './components/OurInsta';
import ResultsSection from './components/ResultsSection';
import TailoredClass from './components/TailoredClass';
import './media-queries.css';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import LMS from './pages/LMS';
import Pages from './pages/Pages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Main />
          <Navbar />
          <HeroSection/>
        </div>
        <CurriculumPage/>
        <TailoredClass/>
        <Card/>
        <Banner/>
        <KidsEducation/>
        <ResultsSection/>
        <BlogsSection/>
        <FAQ/>
        <Experts/>
        <ImageSwiper/>
        <OurInsta/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Pages/>} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
