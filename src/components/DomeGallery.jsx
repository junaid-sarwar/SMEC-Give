import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Use your actual imports
import brand1 from '@/assets/brand-logos/brand1.jpg';
import brand2 from '@/assets/brand-logos/brand2.jpg';
import brand3 from '@/assets/brand-logos/brand3.jpg';
import brand5 from '@/assets/brand-logos/brand5.jpg';
import brand6 from '@/assets/brand-logos/brand6.jpg';
import brand7 from '@/assets/brand-logos/brand7.jpg';
import brand8 from '@/assets/brand-logos/brand8.jpg';
import brand9 from '@/assets/brand-logos/brand9.jpg';
import brand10 from '@/assets/brand-logos/brand10.jpg';

const sponsors = [
  { src: brand1, alt: 'Brand 1' },
  { src: brand2, alt: 'Brand 2' },
  { src: brand3, alt: 'Brand 3' },
  { src: brand5, alt: 'Brand 5' },
  { src: brand6, alt: 'Brand 6' },
  { src: brand7, alt: 'Brand 7' },
  { src: brand8, alt: 'Brand 8' },
  { src: brand9, alt: 'Brand 9' },
  { src: brand10, alt: 'Brand 10' },
  { src: brand1, alt: 'Brand 11' }, // Repeating for grid fullness
  { src: brand2, alt: 'Brand 12' },
  { src: brand3, alt: 'Brand 13' },
];

export default function DomeGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle Floating Animation for all cards
      // Randomize the movement slightly so they don't move in robotic unison
      const cards = gsap.utils.toArray('.sponsor-card');
      
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: "random(-10, 10)", // Move up/down 10px
          rotation: "random(-2, 2)", // Slight tilt
          duration: "random(2, 4)", // Random speed
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1 // Stagger start
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-10 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {sponsors.map((logo, index) => (
          <div 
            key={index} 
            className="sponsor-card bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center justify-center h-32 md:h-40 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-purple-200 cursor-pointer relative overflow-hidden group"
          >
            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}