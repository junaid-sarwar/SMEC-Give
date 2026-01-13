import React, { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Camera, History } from 'lucide-react';

// Assets
import eventpic1 from '@/assets/SMEC-EVENT-PICS/pic1.jpg'
import eventpic2 from '@/assets/SMEC-EVENT-PICS/pic2.jpg'
import eventpic3 from '@/assets/SMEC-EVENT-PICS/pic3.jpg'
import eventpic4 from '@/assets/SMEC-EVENT-PICS/pic4.jpg'
import eventpic5 from '@/assets/SMEC-EVENT-PICS/pic5.jpg'
import eventpic6 from '@/assets/SMEC-EVENT-PICS/pic6.jpg'
import eventpic7 from '@/assets/SMEC-EVENT-PICS/pic7.jpg'
import eventpic8 from '@/assets/SMEC-EVENT-PICS/pic8.jpg'
import eventpic20 from '@/assets/SMEC-EVENT-PICS/pic20.jpg'
import eventpic21 from '@/assets/SMEC-EVENT-PICS/pic21.jpg'

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    year: "2024",
    theme: "The Beginning",
    color: "from-purple-600 to-blue-600",
    images: [
      { src: eventpic1, alt: "Chess Hub" },
      { src: eventpic2, alt: "Opening Ceremony" },
      { src: eventpic3, alt: "Coding Hub" },
      { src: eventpic4, alt: "Crowd" },
    ]
  },
  {
    year: "2025",
    theme: "The Evolution",
    color: "from-fuchsia-600 to-pink-600",
    images: [
      { src: eventpic5, alt: "Winners" },
      { src: eventpic6, alt: "Competition" },
      { src: eventpic7, alt: "Battleground" },
      { src: eventpic8, alt: "Winners" },
      { src: eventpic20, alt: "SMEC Dinner Ceremony" },
      { src: eventpic21, alt: "Celebration" },
    ]
  }
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Force Scroll to top on refresh to prevent GSAP calculation errors
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Create a smooth horizontal scroll
      const scrollTween = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
          ease: "none", // Critical for smooth scrubbing
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 0.5, // Reduced from 1 for better responsiveness
            start: "top top",
            // Dynamically calculate end based on container width for accuracy
            end: () => `+=${sectionRef.current.scrollWidth}`, 
            invalidateOnRefresh: true,
            anticipatePin: 1, // Smoothens the entry into the pinned state
          },
        }
      );

      return () => scrollTween.kill();
    });

    mm.add("(max-width: 1023px)", () => {
        gsap.from(".gallery-section", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 80%",
            }
        });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 md:pt-44 pb-12 md:pb-20 text-center z-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-3 mb-4 opacity-50">
            <History className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-xs md:text-sm">Legacy Archives</span>
          </div>
          <h1 className="font-display text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight overflow-visible">
            SMEC{" "}
            <span className="inline-block pr-6 md:pr-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              GALLERY
            </span>
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto mt-4 md:mt-6 text-sm md:text-lg font-medium px-4 leading-relaxed">
            A journey through the moments that defined the ultimate speed, mind, and execution competition.
          </p>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      {/* 1. Added will-change-transform for GPU acceleration */}
      <div ref={triggerRef} className="overflow-hidden bg-black antialiased">
        <div 
          ref={sectionRef} 
          className="flex flex-col lg:flex-row h-auto lg:h-screen w-full lg:w-max relative will-change-transform"
          style={{ translate: 'none', rotate: 'none', scale: 'none' }}
        >
          {galleryData.map((data) => (
            <section 
              key={data.year} 
              className="gallery-section h-screen lg:h-full w-full lg:w-[100vw] flex items-center justify-center relative px-6 md:px-20 py-12 lg:py-0 shrink-0"
            >
              {/* Background Year (Parallax) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10 lg:opacity-100">
                <span className="text-[40vw] font-black text-white/[0.02] select-none tracking-tighter leading-none">
                  {data.year}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl z-10">
                
                {/* Year Info */}
                <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${data.color} text-white font-bold text-[10px] md:text-sm uppercase tracking-widest shadow-lg`}>
                    Edition {data.year}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
                    {data.theme}
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Relive the energy, the intense competition, and the celebration of technical brilliance that took place in {data.year}.
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-primary font-bold text-xs md:text-base opacity-80">
                    <Camera className="w-5 h-5 animate-pulse" />
                    <span className="tracking-widest uppercase">Explore Archives</span>
                  </div>
                </div>

                {/* --- CARD STACK --- */}
                <div className="flex justify-center items-center order-1 lg:order-2 px-4">
                  <div className="relative group w-[260px] h-[360px] md:w-[380px] md:h-[520px]">
                    
                    <div className={`absolute inset-0 bg-gradient-to-r ${data.color} blur-[60px] md:blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />

                    <Swiper
                      effect={'cards'}
                      grabCursor={true}
                      modules={[EffectCards, Autoplay, Navigation]}
                      className="w-full h-full"
                      loop={false} 
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                    >
                      {data.images.map((img, i) => (
                        <SwiperSlide key={i} className="rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transform scale-105" // Pre-scale to avoid white gaps during animation
                            loading="eager" // Load gallery images immediately for smooth scroll
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90 drop-shadow-md">{img.alt || "SMEC Gallery"}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <section className="py-20 md:py-32 bg-zinc-950 border-t border-white/5 text-center relative z-20">
          <div className="container mx-auto px-4">
              <h3 className="text-zinc-500 font-bold text-[10px] md:text-sm uppercase tracking-[0.4em] mb-8 md:mb-16 opacity-50">By The Numbers</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                  {[
                      { label: "Participants", val: "2,000+" },
                      { label: "Universities", val: "30+" },
                      { label: "Competitions", val: "25+" },
                      { label: "Grand Prizes", val: "600k+" }
                  ].map((stat) => (
                      <div key={stat.label} className="space-y-1 md:space-y-3 group">
                          <div className="text-3xl md:text-6xl font-black text-white group-hover:text-primary transition-colors duration-300">{stat.val}</div>
                          <div className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest opacity-70">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;