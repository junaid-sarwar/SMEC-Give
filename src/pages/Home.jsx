import { useState, useEffect, useRef } from 'react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection'; // This is the API-enabled one we just made

import HeroSection2 from '@/components/HeroSection2';
import { HeroGSAP } from '@/components/HeroGSAP';
import SponsorMarquee from '@/components/SponsorMarquee';
import WhatIsSmec from '@/components/WhatIsSmec';
import { Zap, ArrowRight, Trophy, Gamepad2, Code2, Dice5 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import eGamesLogo from '@/assets/categories/egames.png';
import geeksLogo from '@/assets/categories/geeks.png';
import generalLogo from '@/assets/categories/general.png';

const Home = () => {
  const scrollRef = useRef(null);

  const featuredArenas = [
    {
      id: 1,
      title: "E-GAMES",
      image: eGamesLogo,
      color: "from-purple-600 to-indigo-900",
      description: "CS 2, Valorant, PUBG, Tekken 8 & More",
      prize: "RS 300,000+",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      id: 2,
      title: "GEEKS",
      image: geeksLogo,
      color: "from-fuchsia-600 to-pink-900",
      description: "Hackathon, CTF, Web Dev, UI/UX & More",
      prize: "RS 150,000+",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      id: 3,
      title: "GENERAL GAMES",
      image: generalLogo,
      color: "from-amber-500 to-orange-900",
      description: "Futsal, Brain Games, Chess, Scrabble & More",
      prize: "RS 150,000+",
      icon: <Dice5 className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroSection2 />
      <SponsorMarquee/>
      <HeroGSAP />
      <WhatIsSmec/>

      {/* --- FEATURED ARENAS SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/10">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-400 w-5 h-5 fill-yellow-400 animate-pulse" />
                <span className="text-sm font-bold text-zinc-500 tracking-widest uppercase">SMEC '26 Registration Open</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white">
                POPULAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">ARENAS</span>
              </h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
               View Full Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-8 -mx-4 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory"
            >
              {featuredArenas.map((arena) => (
                <div key={arena.id} className="min-w-[320px] md:min-w-[400px] snap-center">
                  <div className="relative group/card h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-500">
                    
                    {/* Visual Header with Logo */}
                    <div className={`h-1/2 bg-gradient-to-br ${arena.color} flex items-center justify-center p-12 relative`}>
                        <img 
                          src={arena.image} 
                          alt={arena.title} 
                          className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] group-hover/card:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute bottom-4 left-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                           {arena.icon}
                           <span className="text-xs font-bold uppercase tracking-widest">{arena.title}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between h-1/2">
                       <div>
                          <h3 className="text-2xl font-black text-white mb-2">{arena.title}</h3>
                          <p className="text-zinc-400 line-clamp-2 text-sm leading-relaxed">
                            {arena.description}
                          </p>
                       </div>

                       <div className="space-y-4">
                          <div className="flex items-center gap-2">
                             <Trophy className="w-5 h-5 text-yellow-500" />
                             <span className="text-sm font-bold text-zinc-300">Prize Pool: <span className="text-white">{arena.prize}</span></span>
                          </div>
                          <Button className="w-full group/btn" asChild>
                            <Link to="/events">
                               Explore Arena <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                       </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* End Card */}
              <div className="min-w-[200px] flex items-center justify-center snap-center">
                 <Link to="/events" className="group/more flex flex-col items-center gap-4 text-zinc-500 hover:text-primary transition-all">
                     <div className="w-20 h-20 rounded-full border-2 border-zinc-800 flex items-center justify-center group-hover/more:border-primary group-hover/more:bg-primary/10 transition-all">
                         <ArrowRight className="w-8 h-8" />
                     </div>
                     <span className="font-display font-black text-sm tracking-widest">SEE ALL COMPETITIONS</span>
                 </Link>
              </div>
            </div>

            {/* Fade Gradients */}
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none hidden lg:block" />
          </div>

          {/* Prize Pool Footer */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Trophy className="w-8 h-8 text-white" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-white">Grand Prize Pool</h4>
                    <p className="text-zinc-400">Total rewards across all categories in SMEC '26</p>
                 </div>
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                 RS 600,000+
              </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;