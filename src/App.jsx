import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { Toaster } from "@/components/ui/sonner";

// Core Imports
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from './components/PreLoader'; // Import the new loader

// Pages
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/routes/AdminRoute'; 
import EventDetails from './pages/EventDetails';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Sponsors from './pages/Sponsors';

// Register GSAP Plugin outside component
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
        // You can add settings here if needed, e.g., duration: 1.2
    });

    // 2. Control Lenis based on loading state
    if (isLoading) {
      lenis.stop(); // Stop scrolling while loading
    } else {
      lenis.start(); // Start scrolling when done
    }

    // 2. Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    const update = (time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    };

    gsap.ticker.add(update);

    // 4. Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    // Cleanup function
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <AuthProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? "invisible h-screen overflow-hidden" : "visible"}>
      <Toaster position="top-center" richColors />
      
      {/* No <ReactLenis> wrapper needed. The useEffect handles it globally. */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />

          <Route path="/admin/dashboard" 
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App;