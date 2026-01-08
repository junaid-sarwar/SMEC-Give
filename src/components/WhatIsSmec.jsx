import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsSmec() {
  const containerRef = useRef(null);
  
  // Refs for Groups
  const group1Ref = useRef(null); // HAT IS SMEC + Desc
  const group2Ref = useRef(null); // HY PARTICIPATE + Desc
  const cardsRef = useRef(null);  // Cards

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000", // Distance of scroll
          scrub: 1,      // Smooth scrubbing
          pin: true,     // Pin the section
          anticipatePin: 1,
        }
      });

      // --- SEQUENCE START ---

      // 1. Fade OUT the first text group ("HAT IS SMEC?")
      tl.to(group1Ref.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.in"
      });

      // 2. Fade IN the second text group ("HY PARTICIPATE?")
      // It appears in the exact same position
      tl.fromTo(group2Ref.current, 
        { opacity: 0, y: 20, display: 'none' }, // Start hidden
        { opacity: 1, y: 0, display: 'block', duration: 1, ease: "power2.out" }
      );

      // 3. Slide UP the Cards
      tl.fromTo(cardsRef.current,
        { y: "150%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 2, ease: "power3.out" },
        "+=0.2" // Slight delay after text change
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-zinc-950 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="container relative z-10 px-4 flex flex-col items-center justify-center h-full">
        
        {/* --- HEADLINE AREA --- */}
        {/* The 'W' and the Text are in a flex row to align baselines perfectly */}
        <div className="flex items-start justify-center relative w-full max-w-5xl">
            
            {/* THE STATIONARY W (Pinned visually) */}
            {/* leading-none and -mb options ensure it sits tight with the text */}
            <h2 className="font-display text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-[0.8] select-none z-20">
                W
            </h2>

            {/* TEXT WRAPPER (Relative to W) */}
            <div className="relative pt-4 md:pt-8 ml-2 flex-1">
                
                {/* GROUP 1: WHAT IS SMEC */}
                <div ref={group1Ref} className="absolute top-0 left-0 w-full">
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        HAT IS SMEC?
                    </h2>
                    <div className="max-w-2xl">
                        <p className="text-xl md:text-2xl font-bold text-primary mb-3">
                            Speed. Mind. Execution. Competition.
                        </p>
                        <p className="text-zinc-400 font-body text-sm md:text-lg leading-relaxed">
                            Step into a world of intellectual brilliance. SMEC '26 is an exciting blend of gaming tournaments, 
                            interactive challenges, and stimulating activities. A platform where students transform 
                            knowledge into impactful, real-world applications.
                        </p>
                    </div>
                </div>

                {/* GROUP 2: WHY PARTICIPATE (Starts Hidden) */}
                <div ref={group2Ref} className="absolute top-0 left-0 w-full opacity-0 hidden">
                    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        HY PARTICIPATE?
                    </h2>
                    <div className="max-w-2xl">
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                            TRANSFORMATIVE JOURNEY AWAITS
                        </p>
                        <p className="text-zinc-300 font-body text-sm md:text-lg leading-relaxed">
                            It's more than just a competition. It's about building connections, enhancing skills, 
                            and gaining the recognition you deserve on a national stage.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        {/* --- CARDS SECTION (Bottom) --- */}
        {/* Absolute positioned at bottom to slide up */}
        <div ref={cardsRef} className="absolute bottom-0 left-0 w-full px-4 pb-12 translate-y-[150%] opacity-0 z-30">
             <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                <BenefitCard 
                    icon={Target} 
                    title="Skill Enhancement" 
                    desc="Sharpen your gaming, coding, and problem-solving skills."
                    color="text-cyan-400"
                />
                <BenefitCard 
                    icon={Users} 
                    title="Building Connections" 
                    desc="Connect with students from different universities & share ideas."
                    color="text-purple-400"
                />
                <BenefitCard 
                    icon={Award} 
                    title="Gaining Recognition" 
                    desc="Stand out to potential employers as a driven individual."
                    color="text-yellow-400"
                />
             </div>
        </div>

      </div>
    </section>
  );
}

// Compact Card for better mobile fit
function BenefitCard({ icon: Icon, title, desc, color }) {
    return (
        <div className="p-6 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group">
            <div className={`w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
                {title}
            </h3>
            <p className="text-zinc-400 font-body text-xs md:text-sm leading-relaxed">
                {desc}
            </p>
        </div>
    )
}