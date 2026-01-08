import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Zap, Brain, Target, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LegacySection = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const badgeRef = useRef(null);

  const words = [
    { text: 'Speed', icon: Zap, color: 'text-cyan-400' },
    { text: 'Mind', icon: Brain, color: 'text-purple-400' },
    { text: 'Execution', icon: Target, color: 'text-pink-400' },
    { text: 'Competition', icon: Flame, color: 'text-yellow-400' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter
      gsap.fromTo(counterRef.current, { innerText: 0 }, {
          innerText: 10,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      // Badge Glow
      gsap.to(badgeRef.current, {
        boxShadow: '0 0 60px rgba(234, 179, 8, 0.6)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-16">
          <div ref={badgeRef} className="relative px-8 py-3 rounded-full border border-yellow-500/50 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-display text-lg font-bold text-yellow-500 tracking-widest">
                10TH ANNIVERSARY
              </span>
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mb-20">
          <span ref={counterRef} className="font-display text-[150px] md:text-[220px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-700 drop-shadow-[0_0_40px_rgba(234,179,8,0.4)]">
            0
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            YEARS OF EXCELLENCE
          </h2>
        </div>

        {/* SMEC Attributes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {words.map((word) => (
            <div key={word.text} className="group p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-center">
              <word.icon className={`w-10 h-10 mx-auto mb-4 ${word.color} group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">{word.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;