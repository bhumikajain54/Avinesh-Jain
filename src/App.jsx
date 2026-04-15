import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components that are below the fold
const FeaturedWork = lazy(() => import('./components/FeaturedWork'));
const DesignCategories = lazy(() => import('./components/DesignCategories'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const PortfolioGallery = lazy(() => import('./components/PortfolioGallery'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Skills = lazy(() => import('./components/Skills'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <FeaturedWork />
          <DesignCategories />
          <CaseStudies />
          <PortfolioGallery />
          <AboutMe />
          <Skills />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
