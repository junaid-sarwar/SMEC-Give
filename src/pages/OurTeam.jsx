import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '@/components/Navbar'; // Check path
import { Footer } from '@/components/Footer'; // Check path
import { User } from 'lucide-react';

// ✅ Import Data Correctly
import { headOfSmec, coreTeam } from '@/data/teamData'; 

// --- CARD COMPONENT ---
const MemberCard = ({ member, size = "md", className }) => {
  const isLarge = size === "lg";
  const isXLarge = size === "xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`relative group flex flex-col items-center ${className}`}
    >
      {/* Card Container */}
      <div className={`
        relative overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl transition-all duration-500
        ${isXLarge ? "w-64 h-80 rounded-2xl border-purple-500/50 shadow-purple-900/20" : 
          isLarge ? "w-56 h-72 rounded-xl border-yellow-500/30 shadow-yellow-900/10" : 
          "w-48 h-64 rounded-lg hover:border-primary/50"}
      `}>
        
        {/* Image */}
        <div className="absolute inset-0 bg-black">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                <User className="w-20 h-20 text-zinc-600" />
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 w-full p-4 text-center z-10">
          <h3 className={`font-display font-bold text-white uppercase leading-none mb-1 ${isXLarge ? "text-xl" : "text-sm"}`}>
            {member.name}
          </h3>
          <p className={`font-body font-semibold tracking-wider ${isXLarge ? "text-purple-400 text-sm" : "text-primary text-xs"}`}>
            {member.role}
          </p>
        </div>

        {/* Cyber Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors" />
      </div>
      
      {/* Connecting Line Node (Visual only) */}
      <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent absolute -bottom-8 left-1/2 -translate-x-1/2 hidden md:block" />
    </motion.div>
  );
};

// --- TREE CONNECTOR (SVG Lines) ---
const Connector = ({ height = 40 }) => (
    <div className={`w-full flex justify-center items-center h-[${height}px] overflow-visible pointer-events-none hidden md:flex`}>
        <div className="w-px h-full bg-zinc-700 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
        </div>
    </div>
);


export default function OurTeam() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-black font-body text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-zinc-900 bg-cover bg-center opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
        
        <div className="relative z-10 text-center px-4 mt-20">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-display text-5xl md:text-7xl font-bold text-white mb-4"
            >
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">CORE</span> TEAM
            </motion.h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                The masterminds behind SMEC '26. A hierarchy built on leadership, vision, and execution.
            </p>
        </div>
      </div>

      {/* --- HIERARCHY TREE --- */}
      <main ref={containerRef} className="container mx-auto px-4 pb-32 relative z-10">
        
        {/* LEVEL 1: HEAD OF SMEC */}
        <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute -top-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <MemberCard member={headOfSmec} size="xl" className="z-10" />
            <Connector height={60} />
        </div>

        {/* LEVEL 2: PRESIDENT & VP */}
        <div className="relative mb-12">
             {/* Horizontal Connector Line */}
             <div className="absolute -top-8 left-[30%] right-[30%] h-px bg-zinc-700 hidden md:block">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-500 rounded-full"></div>
                <div className="absolute left-1/2 top-0 h-8 w-px bg-zinc-700 -translate-x-1/2 -translate-y-full"></div>
             </div>

             <div className="flex flex-wrap justify-center gap-12 md:gap-32">
                <MemberCard member={coreTeam.president} size="lg" />
                <MemberCard member={coreTeam.vp} size="lg" />
             </div>
             <Connector height={60} />
        </div>

        {/* LEVEL 3: EXECUTIVES */}
        <div className="relative mb-20">
             <div className="flex flex-wrap justify-center gap-8">
                {coreTeam.execs.map((member) => (
                    <MemberCard key={member.name} member={member} size="md" />
                ))}
             </div>
             <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12" />
        </div>

        {/* LEVEL 4: DIRECTORS (Grid Layout) */}
        <div>
            <h2 className="text-center font-display text-3xl font-bold text-white mb-12 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-primary/50"></span>
                DIRECTORATE
                <span className="h-px w-12 bg-primary/50"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {coreTeam.directors.map((member, i) => (
                    <MemberCard 
                        key={member.name} 
                        member={member} 
                        size="md" 
                        className={`hover:-translate-y-2 transition-transform duration-300`} 
                    />
                ))}
            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}