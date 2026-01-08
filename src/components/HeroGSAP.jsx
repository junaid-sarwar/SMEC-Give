import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export function HeroGSAP() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.5, // Smooth scrub works great with Lenis
          end: "+=1500",
          anticipatePin: 1,
        },
      });

      // Optional: Slight Parallax on Text for depth
      sections.forEach((section) => {
        const text = section.querySelector(".big-text");
        gsap.fromTo(
          text,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              containerAnimation: gsap.getById("scrollTween"),
              start: "left center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    // The Container that gets Pinned
    <div ref={triggerRef} className="w-full max-w-[100vw] overflow-x-hidden bg-background">
      {/* 
         Performance Note: 'will-change-transform' tells the browser 
         to prepare for movement, reducing lag.
      */}
      <div
        ref={sectionRef}
        className="flex w-[300vw] h-screen relative will-change-transform"
      >
        {/* --- SCREEN 1: COMPETE --- */}
        <div className="panel w-screen h-screen flex flex-col items-center justify-center relative border-r border-white/5">
          {/* Optimized Background */}
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <h1 className="big-text font-display text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-2xl z-10">
            COMPETE
          </h1>
          <p className="text-zinc-500 font-mono tracking-[0.5em] mt-4 uppercase animate-pulse">
            Initiate Sequence
          </p>
        </div>

        {/* --- SCREEN 2: CONQUER --- */}
        <div className="panel w-screen h-screen flex flex-col items-center justify-center relative border-r border-white/5">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute inset-0 bg-primary/10" />{" "}
          {/* Solid color overlay is faster than massive gradient */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <h1 className="big-text font-display text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-purple-900 drop-shadow-[0_0_50px_rgba(168,85,247,0.5)] z-10">
            CONQUER
          </h1>
          <p className="text-primary/70 font-mono tracking-[0.5em] mt-4 uppercase">
            Dominate the Arena
          </p>
        </div>

        {/* --- SCREEN 3: CHAMPION --- */}
        <div className="panel w-screen h-screen flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute inset-0 bg-yellow-500/10" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <h1 className="big-text font-display text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-700 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)] z-10 leading-none">
            CHAMPION
          </h1>
        </div>
      </div>
    </div>
  );
}
