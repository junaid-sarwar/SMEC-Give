import { useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Zap, Brain, ChevronRight } from 'lucide-react';

// Import the Category Logos
import eGamesLogo from '@/assets/categories/egames.png';
import geeksLogo from '@/assets/categories/geeks.png';
import generalLogo from '@/assets/categories/general.png';

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeZWdOgo-UbXJkqudpEBfviM6N98S7AGXhiyGXDcmielUvIKQ/viewform";

// Static Data from Flyer
const categories = [
  {
    id: 'egames',
    title: 'E-GAMES',
    logo: eGamesLogo,
    color: 'from-purple-600 to-indigo-900', // Deep Purple Gradient
    borderColor: 'border-purple-500/50',
    shadow: 'shadow-purple-500/20',
    games: [
      { name: 'CS 2', price: '3000' },
      { name: 'CS 1.6', price: '2500' },
      { name: 'FIFA', price: '1000' },
      { name: 'Free Fire', price: '2000' },
      { name: 'NFS', price: '1000' },
      { name: 'PUBG', price: '3000' },
      { name: 'Tekken 8', price: '1000' },
      { name: 'Valorant', price: '3000' },
      { name: 'WWE', price: '1000' },
    ]
  },
  {
    id: 'geeks',
    title: 'GEEKS',
    logo: geeksLogo,
    color: 'from-fuchsia-600 to-pink-900', // Pink/Magenta Gradient
    borderColor: 'border-fuchsia-500/50',
    shadow: 'shadow-fuchsia-500/20',
    games: [
      { name: 'Circuit Designing', price: '500' },
      { name: 'Code in Dark', price: '500' },
      { name: 'Database Design', price: '500' },
      { name: 'CTF', price: '500' },
      { name: 'Hackathon', price: '500' },
      { name: 'Logo Designing', price: '500' },
      { name: 'Mobile App Dev', price: '500' },
      { name: 'Network Designing', price: '500' },
      { name: 'Pitch Deck', price: '500' },
      { name: 'Prompt Engineering', price: '500' },
      { name: 'Speed Debugging', price: '500' },
      { name: 'Speed Programming', price: '500' },
      { name: 'UI/UX Designing', price: '500' },
      { name: 'Web Development', price: '500' },
    ]
  },
  {
    id: 'general',
    title: 'GENERAL GAMES',
    logo: generalLogo,
    color: 'from-amber-500 to-orange-900', // Gold/Orange Gradient
    borderColor: 'border-amber-500/50',
    shadow: 'shadow-amber-500/20',
    games: [
      { name: 'Arm Wrestling', price: '500' },
      { name: 'Brain Games', price: '2000' },
      { name: 'Chess', price: '500' },
      { name: 'Creative Writing', price: '500' },
      { name: 'Futsal', price: '3000' },
      { name: 'Human Ludo', price: '1000' },
      { name: 'Photo Contest', price: '500' },
      { name: 'Scrabble', price: '500' },
      { name: 'Sequence', price: '500' },
      { name: 'Table Tennis', price: '500' },
      { name: 'Treasure Hunt', price: '2000' },
      { name: 'Tug of War', price: '2000' },
      { name: 'Vlogging', price: '500' },
    ]
  }
];

// Helper Badge Component
const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border ${className}`}>
    {children}
  </span>
);

export default function Events() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple staggered reveal animation
    const ctx = gsap.context(() => {
        gsap.fromTo(".category-card", 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black font-body text-white selection:bg-primary/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 pb-20 text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black pointer-events-none" />
         <div className="relative z-10 px-4">
             <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
                CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-600">ARENA</span>
             </h1>
             <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Explore the competitions. Click on any game to register directly via our official form.
             </p>
         </div>
      </section>

      {/* --- CATEGORIES GRID --- */}
      <section ref={containerRef} className="container mx-auto px-4 pb-32">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
                <motion.div 
                    key={cat.id}
                    className={`category-card relative group rounded-3xl overflow-hidden bg-zinc-900/50 border ${cat.borderColor} ${cat.shadow} backdrop-blur-sm transition-all duration-500 hover:-translate-y-2`}
                >
                    {/* Top Gradient Header */}
                    <div className={`h-32 w-full bg-linear-to-b ${cat.color} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20" />
                        
                        {/* Logo Image */}
                        <div className="relative z-10 w-24 h-24 rounded-full bg-black/50 border-2 border-white/20 backdrop-blur-md flex items-center justify-center p-3 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                             <img src={cat.logo} alt={cat.title} className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                        <h2 className="font-display text-3xl font-bold text-center mb-6 tracking-wide text-white group-hover:text-primary transition-colors">
                            {cat.title}
                        </h2>

                        {/* Scrollable Game List with Hidden Scrollbar */}
                        <div className="space-y-3 max-h-[500px] overflow-y-auto no-scrollbar">
                            {cat.games.map((game, i) => (
                                <a 
                                    key={i} 
                                    href={GOOGLE_FORM_URL} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group/item cursor-pointer"
                                >
                                    <span className="font-body font-bold text-zinc-300 group-hover/item:text-white transition-colors">
                                        {game.name}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 pointer-events-none border">
                                            ₨ {game.price}
                                        </Badge>
                                        <ChevronRight className="w-4 h-4 text-zinc-500 group-hover/item:text-white transition-transform group-hover/item:translate-x-1" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <Button className={`w-full font-bold uppercase tracking-wider bg-gradient-to-r ${cat.color} text-white border-none shadow-lg hover:brightness-110`} asChild>
                                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                                    Register for {cat.title}
                                </a>
                            </Button>
                        </div>
                    </div>

                </motion.div>
            ))}
         </div>
      </section>

      {/* --- PRIZE POOL BANNER --- */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 grid-pattern opacity-30" />
         <div className="relative z-10 px-4">
             <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
             <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-xl">
                 PRIZE POOL: <span className="text-yellow-400">RS 600,000+</span>
             </h2>
             <p className="text-purple-200 text-lg uppercase tracking-widest font-bold">
                 Compete. Win. Dominate.
             </p>
         </div>
      </section>

      <Footer />
    </div>
  );
}