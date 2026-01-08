import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import TeamCard from './TeamCard';
// import { gameCategories } from '@/data/teamData';
import { Gamepad2, Code, Trophy } from 'lucide-react';

const categoryIcons = { 'E-Games': Gamepad2, 'Geeks': Code, 'General Games': Trophy };

const GameLeadsSection = () => {
  const [activeCategory, setActiveCategory] = useState(gameCategories[0].name);
  const gridRef = useRef(null);
  
  const activeData = gameCategories.find((cat) => cat.name === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-white mb-8">Game Leads</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {gameCategories.map((cat) => {
                const Icon = categoryIcons[cat.name];
                const isActive = activeCategory === cat.name;
                return (
                    <button
                        key={cat.name}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                            isActive ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white'
                        }`}
                    >
                        <Icon size={18} /> {cat.name}
                    </button>
                )
            })}
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeData.games.map((game) => (
            <div key={game.name} className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold text-white text-center mb-6 border-b border-white/10 pb-4">{game.name}</h3>
                <div className="space-y-4">
                    <TeamCard {...game.lead} />
                    <TeamCard {...game.coLead} />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameLeadsSection;