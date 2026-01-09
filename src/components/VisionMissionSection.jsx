import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target, Compass, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VisionMissionSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100,
            rotateY: index % 2 === 0 ? -20 : 20 
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* --- VISION CARD --- */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="group relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900/50 to-black backdrop-blur-xl hover:border-purple-500/50 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-white">
                OUR <span className="text-purple-500">VISION</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-body">
              <p>
                Our vision for <span className="text-white font-bold">SMEC'26</span> is to build an extraordinary platform that breaks barriers, ignites innovation, and cultivates collaboration and intellectual advancement.
              </p>
              <p>
                We seek to go beyond being just a competition; it aims to offer a <span className="text-purple-300">transformative journey</span> where participants not only demonstrate their abilities but also engage in a vibrant, enriching learning environment.
              </p>
              <p>
                We strive to create a community that values diversity, embraces challenges, and raises the bar for intellectual accomplishment on both <span className="italic">national and international levels.</span>
              </p>
            </div>
            
            {/* Decorative Icon in bottom right */}
            <Compass className="absolute bottom-8 right-8 w-24 h-24 text-white/5 -rotate-12" />
          </div>

          {/* --- MISSION CARD --- */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="group relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900/50 to-black backdrop-blur-xl hover:border-yellow-500/50 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter text-white">
                OUR <span className="text-yellow-500">MISSION</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-body">
              <p>
                To foster a culture of innovation, learning, and collaboration. We are dedicated to creating a space where students not only compete but also <span className="text-white font-bold">connect, share ideas, and develop</span> as individuals.
              </p>
              <p>
                SMEC'26 is built to empower participants through a wide range of competitions that challenge their intellect, ignite creativity, and put their technical skills to the test.
              </p>
              <p>
                We aspire to spark a <span className="text-yellow-200/80">lifelong love of learning</span>, encourage the pursuit of excellence, and serve as a catalyst for personal and academic growth, shaping the leaders of the future.
              </p>
            </div>

            {/* Decorative Icon in bottom right */}
            <Lightbulb className="absolute bottom-8 right-8 w-24 h-24 text-white/5 rotate-12" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;