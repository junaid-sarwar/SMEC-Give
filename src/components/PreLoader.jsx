import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Replace these with your actual local paths
import LogoColor from '@/assets/logo-bg-crop2.png'; 
import LogoBW from '@/assets/logo-bw.png'; 

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const logoContainerRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Smooth exit transition
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          onComplete: onComplete,
        });
      },
    });

    // 1. SET INITIAL STATES
    gsap.set(wordRefs.current, { opacity: 0 });
    gsap.set(logoContainerRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(fillRef.current, { clipPath: "inset(100% 0% 0% 0%)" });

    // 2. ENTRANCE ANIMATION (Slower & Controlled)
    // Speed (Left), Mind (Right), Execution (Top), Competition (Bottom)
    tl.fromTo(wordRefs.current[0], { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power4.out" })
      .fromTo(wordRefs.current[1], { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.4")
      .fromTo(wordRefs.current[2], { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.4")
      .fromTo(wordRefs.current[3], { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }, "-=0.4");

    // 3. THE "MOMENT OF CLARITY" (Wait for 0.6 seconds so they can read it)
    tl.to({}, { duration: 0.6 });

    // 4. EXPLOSION PHASE
    tl.to(wordRefs.current, {
      scale: 3,
      opacity: 0,
      filter: "blur(15px)",
      duration: 0.6,
      stagger: 0.1,
      ease: "expo.in"
    });

    // 5. LOGO REVEAL (B&W Ghost first)
    tl.to(logoContainerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.2");

    // 6. LIQUID FILL (Filling like water from bottom to top)
    tl.to(fillRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 2.5, // Nice slow filling speed
      ease: "power2.inOut"
    });

    // 7. FINAL GLOW POP
    tl.to(logoContainerRef.current, {
      filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.7))",
      scale: 1.05,
      duration: 0.5,
      yoyo: true,
      repeat: 1
    });

    return () => tl.kill();
  }, [onComplete]);

  // High-impact text styling
  const textClass = "font-display text-5xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-none";

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* Background visual - subtle tech grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* TEXT CONTAINER - Using flex to prevent overlap */}
      <div className="absolute flex flex-col items-center gap-4 z-20">
        <div ref={el => wordRefs.current[0] = el} className={textClass}>Speed</div>
        <div ref={el => wordRefs.current[1] = el} className={textClass}>Mind</div>
        <div ref={el => wordRefs.current[2] = el} className={textClass}>Execution</div>
        <div ref={el => wordRefs.current[3] = el} className={textClass}>Competition</div>
      </div>

      {/* LOGO CONTAINER */}
      <div ref={logoContainerRef} className="relative w-72 h-72 md:w-[450px] md:h-[450px] z-10">
        {/* Black & White Ghost Image */}
        <img 
          src={LogoBW} 
          alt="SMEC BW" 
          className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale" 
        />
        
        {/* Color Image that fills up */}
        <div 
          ref={fillRef}
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          <img 
            src={LogoColor} 
            alt="SMEC Color" 
            className="w-full h-full object-contain" 
          />
          
          {/* Subtle Energy Line at the top of the "Water" */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-400 blur-[2px] opacity-70"></div>
        </div>
      </div>

      {/* Decorative pulse ring */}
      <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-white/5 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default Preloader;