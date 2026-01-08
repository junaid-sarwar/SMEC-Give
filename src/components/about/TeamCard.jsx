import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamCard = ({ name, designation, avatar, tier, socialLinks }) => {
  const cardRef = useRef(null);

  const tierStyles = {
    leadership: {
      border: 'border-yellow-500',
      glow: '0 0 30px rgba(234, 179, 8, 0.4)',
      hoverGlow: '0 0 50px rgba(234, 179, 8, 0.6)',
      size: 'p-8',
      avatarSize: 'h-28 w-28',
      titleSize: 'text-2xl',
      labelColor: 'text-yellow-500',
    },
    director: {
      border: 'border-purple-500',
      glow: '0 0 20px rgba(168, 85, 247, 0.3)',
      hoverGlow: '0 0 40px rgba(168, 85, 247, 0.5)',
      size: 'p-6',
      avatarSize: 'h-24 w-24',
      titleSize: 'text-xl',
      labelColor: 'text-purple-400',
    },
    lead: {
      border: 'border-cyan-500/50',
      glow: '0 0 15px rgba(6, 182, 212, 0.2)',
      hoverGlow: '0 0 30px rgba(6, 182, 212, 0.4)',
      size: 'p-5',
      avatarSize: 'h-16 w-16',
      titleSize: 'text-lg',
      labelColor: 'text-cyan-500',
    },
  };

  const style = tierStyles[tier];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, { scale: 1.05, boxShadow: style.hoverGlow, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { scale: 1, boxShadow: style.glow, duration: 0.3, ease: 'power2.out' });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [style]);

  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${style.size} rounded-2xl ${style.border} border bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 cursor-default`}
      style={{ boxShadow: style.glow }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <Avatar className={`${style.avatarSize} mb-4 ring-2 ring-offset-2 ring-offset-black ${tier === 'leadership' ? 'ring-yellow-500' : tier === 'director' ? 'ring-purple-500' : 'ring-cyan-500/50'}`}>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className={`font-display font-bold ${tier === 'leadership' ? 'bg-yellow-900/50 text-yellow-500' : tier === 'director' ? 'bg-purple-900/50 text-purple-400' : 'bg-cyan-900/50 text-cyan-400'}`}>
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        <h3 className={`font-display ${style.titleSize} font-bold text-white mb-1`}>
          {name}
        </h3>
        <p className={`text-sm ${style.labelColor} font-medium mb-3 uppercase tracking-wider`}>
          {designation}
        </p>

        {socialLinks && (
          <div className="flex gap-4 mt-2">
            {socialLinks.linkedin && <a href={socialLinks.linkedin} className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={18} /></a>}
            {socialLinks.github && <a href={socialLinks.github} className="text-zinc-400 hover:text-white transition-colors"><Github size={18} /></a>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;