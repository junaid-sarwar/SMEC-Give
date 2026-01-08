import { motion } from 'framer-motion';
// Importing images as requested
import brand1 from '@/assets/brand-logos/brand1.jpg';
import brand2 from '@/assets/brand-logos/brand2.jpg';
import brand3 from '@/assets/brand-logos/brand3.jpg';
// import brand4 from '@/assets/brand-logos/brand4.jpg';
import brand5 from '@/assets/brand-logos/brand5.jpg';
import brand6 from '@/assets/brand-logos/brand6.jpg';
import brand7 from '@/assets/brand-logos/brand7.jpg';
import brand8 from '@/assets/brand-logos/brand8.jpg';
import brand9 from '@/assets/brand-logos/brand9.jpg';
import brand10 from '@/assets/brand-logos/brand10.jpg';

const sponsors = [
  brand1, brand2, brand3,  brand5, 
  brand6, brand7, brand8, brand9, brand10
];

export default function SponsorMarquee() {
  return (
    <section className="py-10 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      
      {/* --- Section Header --- */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Powered By Industry Leaders
        </p>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative flex w-full overflow-hidden mask-gradient">
        
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* --- The Moving Track --- */}
        {/* We render the list TWICE to create a seamless infinite loop */}
        <motion.div 
          className="flex gap-10 items-center whitespace-nowrap min-w-full"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Move exactly half the width (one full set)
          transition={{ 
            ease: "linear", 
            duration: 20, // Adjust speed: Higher = Slower
            repeat: Infinity 
          }}
        >
          {/* First Set */}
          {sponsors.map((logo, index) => (
            <LogoItem key={`a-${index}`} src={logo} index={index} />
          ))}

          {/* Duplicate Set (For smooth loop) */}
          {sponsors.map((logo, index) => (
            <LogoItem key={`b-${index}`} src={logo} index={index} />
          ))}

        </motion.div>
      </div>
    </section>
  );
}

// Helper Component for individual logos
function LogoItem({ src, index }) {
    return (
        <div className="relative group w-32 h-20 md:w-40 md:h-24 flex items-center justify-center shrink-0">
            {/* The Image */}
            <img 
                src={src} 
                alt={`Sponsor ${index + 1}`} 
                className="w-full h-full object-contain opacity-100 scale-110 md:scale-100 md:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 cursor-pointer mix-blend-screen"
            />
        </div>
    )
}