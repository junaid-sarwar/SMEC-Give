// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
// } from 'recharts';
// import { Download, Users, Instagram, Facebook, TrendingUp, Handshake, CheckCircle2 } from 'lucide-react';
// import { Navbar } from '@/components/Navbar';
// import { Footer } from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Reuse your Sponsor Marquee component (Pass a prop to make bg white if needed, or just wrap it)
// import SponsorMarquee from '@/components/SponsorMarquee'; 

// gsap.registerPlugin(ScrollTrigger);

// // Data from PDF
// const growthData = [
//   { year: '2023', participants: 2400, reach: 58000 },
//   { year: '2024', participants: 3500, reach: 430000 },
//   { year: '2025', participants: 5000, reach: 1000000 }, // 1 Million+
//   { year: '2026 (Est)', participants: 8000, reach: 2000000 },
// ];

// const sponsorshipTiers = [
//   {
//     name: "Powered By",
//     price: "PKR 3,000,000",
//     color: "from-purple-600 via-purple-500 to-indigo-600",
//     glow: "shadow-purple-500/20",
//     benefits: [
//       "Exclusive 'Powered By' Branding on all materials",
//       "Keynote Speech at Closing Ceremony",
//       "Access to Student Database for Recruitment",
//       "Free Seminar Slots & Job Fair Stall",
//       "Logo on Event Shirts & Media Wall"
//     ]
//   },
//   {
//     name: "Gold Sponsor",
//     price: "PKR 1,500,000",
//     color: "from-yellow-400 via-yellow-500 to-yellow-600",
//     glow: "shadow-yellow-500/20",
//     benefits: [
//       "Formal MOU & Partnership",
//       "Marketing Speech Opportunity",
//       "50% Discount on Job Fair Stall",
//       "Logo on Media Wall & Brochures",
//       "Award Shield Recognition"
//     ]
//   },
//   {
//     name: "Silver Sponsor",
//     price: "PKR 750,000",
//     color: "from-slate-300 via-slate-400 to-slate-500",
//     glow: "shadow-slate-500/20",
//     benefits: [
//       "30% Discount on Job Fair Stall",
//       "Logo on Media Wall",
//       "Souvenirs & Certificates Branding",
//       "Improvement Drive Collaboration"
//     ]
//   },
//   {
//     name: "Bronze Sponsor",
//     price: "PKR 300,000",
//     color: "from-orange-700 via-orange-600 to-red-700",
//     glow: "shadow-orange-500/20",
//     benefits: [
//       "15% Discount on Job Fair Stall",
//       "Logo on Brochures",
//       "Dedicated Media Wall Space",
//       "Certificate of Appreciation"
//     ]
//   }
// ];

// export default function Sponsors() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
    
//     const ctx = gsap.context(() => {
//       gsap.fromTo(chartRef.current, 
//         { opacity: 0, y: 100 },
//         { 
//           opacity: 1, y: 0, duration: 1, ease: "power3.out",
//           scrollTrigger: { trigger: chartRef.current, start: "top 80%" }
//         }
//       );
//     });
//     return () => ctx.revert();
//   }, []);

//   const handleDownload = () => {
//     // Ensure you put the PDF in the public folder as 'SMEC_Proposal.pdf'
//     const link = document.createElement('a');
//     link.href = '/SMEC_Proposal.pdf';
//     link.download = 'SMEC_26_Sponsorship_Proposal.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen md:mt-7 bg-black font-body text-white selection:bg-purple-500/30">
//       <Navbar />

//       {/* --- HERO SECTION --- */}
//       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
//         {/* Background Gradients */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black" />
//         <div className="absolute inset-0 grid-pattern opacity-20" />
        
//         {/* Animated Glow Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] animate-pulse-slow" />

//         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
//             <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold tracking-widest text-xs uppercase">
//                     Build The Future With Us
//                 </div>
                
//                 <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
//                     ELEVATE YOUR <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-gradient-x">
//                         BRAND LEGACY
//                     </span>
//                 </h1>
                
//                 <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
//                     Join forces with the largest student-led tech olympiad. <br/>
//                     <span className="text-white font-bold">1 Million+ Reach. 5000+ Innovators. One Stage.</span>
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                     <Button onClick={() => document.getElementById('tiers').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-10 text-lg font-bold bg-primary hover:bg-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all hover:scale-105">
//                         View Packages
//                     </Button>
//                     <Button onClick={handleDownload} variant="outline" className="h-14 px-10 text-lg border-white/20 hover:bg-white/10 group bg-transparent text-white">
//                         <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
//                         Download Proposal
//                     </Button>
//                 </div>
//             </motion.div>
//         </div>
//       </section>

//       {/* --- GROWTH METRICS --- */}
//       <section ref={chartRef} className="py-24 bg-zinc-950/50 relative border-y border-white/5">
//          <div className="container mx-auto px-4">
//             <div className="text-center mb-20">
//                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Unstoppable Growth</h2>
//                 <p className="text-zinc-500">Witness the exponential rise of SMEC year over year.</p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-16">
//                 {/* Graph 1 */}
//                 <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md shadow-2xl">
//                     <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
//                         <Users className="text-cyan-400 h-6 w-6" /> Participant Footfall
//                     </h3>
//                     <div className="h-[350px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <AreaChart data={growthData}>
//                                 <defs>
//                                     <linearGradient id="colorParticipants" x1="0" y1="0" x2="0" y2="1">
//                                         <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
//                                         <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
//                                     </linearGradient>
//                                 </defs>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
//                                 <XAxis dataKey="year" stroke="#666" tick={{fill: '#888'}} />
//                                 <YAxis stroke="#666" tick={{fill: '#888'}} />
//                                 <Tooltip contentStyle={{ backgroundColor: '#09090b', border: '1px solid #333', borderRadius: '8px' }} />
//                                 <Area type="monotone" dataKey="participants" stroke="#22d3ee" strokeWidth={4} fillOpacity={1} fill="url(#colorParticipants)" />
//                             </AreaChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>

//                 {/* Graph 2 */}
//                 <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-md shadow-2xl">
//                     <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
//                         <TrendingUp className="text-purple-400 h-6 w-6" /> Digital Reach
//                     </h3>
//                     <div className="h-[350px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <BarChart data={growthData}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
//                                 <XAxis dataKey="year" stroke="#666" tick={{fill: '#888'}} />
//                                 <YAxis stroke="#666" tickFormatter={(value) => `${value/1000}k`} tick={{fill: '#888'}} />
//                                 <Tooltip cursor={{fill: '#ffffff10'}} contentStyle={{ backgroundColor: '#09090b', border: '1px solid #333', borderRadius: '8px' }} />
//                                 <Bar dataKey="reach" fill="#a855f7" radius={[6, 6, 0, 0]} barSize={50} />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
//                 <StatBox icon={Facebook} value="430K+" label="Facebook Reach" color="text-blue-500" />
//                 <StatBox icon={Instagram} value="500K+" label="Instagram Reach" color="text-pink-500" />
//                 <StatBox icon={Users} value="5,000+" label="On-Ground Footfall" color="text-green-500" />
//                 <StatBox icon={Handshake} value="36+" label="Former Sponsors" color="text-yellow-500" />
//             </div>
//          </div>
//       </section>

//       {/* --- PARTNERSHIP TIERS --- */}
//       <section id="tiers" className="py-32 relative">
//          <div className="container mx-auto px-4">
//             <h2 className="font-display text-5xl font-bold text-center mb-20 text-white">
//                 Sponsorship Tiers
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {sponsorshipTiers.map((tier, index) => (
//                     <motion.div 
//                         key={tier.name}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.1 }}
//                         className={`relative group rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl ${tier.glow} hover:-translate-y-2 transition-transform duration-500`}
//                     >
//                         {/* Header Gradient */}
//                         <div className={`h-3 w-full bg-gradient-to-r ${tier.color}`} />
                        
//                         <div className="p-8 flex flex-col h-full">
//                             <h3 className="font-display text-2xl font-bold mb-2 text-white">{tier.name}</h3>
//                             <p className={`text-xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-8`}>
//                                 {tier.price}
//                             </p>
                            
//                             <ul className="space-y-4 mb-10 flex-1">
//                                 {tier.benefits.map((benefit, i) => (
//                                     <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
//                                         <CheckCircle2 className={`h-5 w-5 shrink-0 bg-gradient-to-r ${tier.color} text-transparent bg-clip-text`} />
//                                         {benefit}
//                                     </li>
//                                 ))}
//                             </ul>

//                             <Button className={`w-full h-12 font-bold uppercase tracking-wider bg-gradient-to-r ${tier.color} text-white border-none shadow-lg hover:brightness-110 transition-all`}>
//                                 Select Plan
//                             </Button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//          </div>
//       </section>

//       {/* --- FORMER SPONSORS (White Section for Contrast) --- */}
//       <section className="py-24 bg-white text-black relative">
//         <div className="container mx-auto px-4 mb-12 text-center">
//             <h2 className="font-display text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
//             <p className="text-zinc-600 max-w-2xl mx-auto">
//                 We are proud to have partnered with some of the biggest names in the industry.
//             </p>
//         </div>
        
//         {/* Reusing the Marquee Component we built earlier */}
//         <div className="opacity-90">
//              <SponsorMarquee /> 
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// // Helper Components
// function StatBox({ icon: Icon, value, label, color }) {
//     return (
//         <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 text-center hover:border-white/20 transition-all hover:scale-105 group">
//             <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
//                 <Icon className={`h-6 w-6 ${color}`} />
//             </div>
//             <div className="font-display text-3xl font-bold text-white mb-1">{value}</div>
//             <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{label}</div>
//         </div>
//     )
// }

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Download, Users, Instagram, Facebook, TrendingUp, Handshake, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SponsorMarquee from '@/components/SponsorMarquee';

gsap.registerPlugin(ScrollTrigger);

const growthData = [
  { year: '2023', participants: 2400, reach: 58000 },
  { year: '2024', participants: 3500, reach: 430000 },
  { year: '2025', participants: 5000, reach: 1000000 },
  { year: '2026', participants: 8000, reach: 2000000 },
];
const TrophyIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;

const StarIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const tiers = [
  {
    name: "POWERED BY",
    price: "3,000,000",
    color: "from-purple-600 via-fuchsia-500 to-indigo-600",
    shadow: "shadow-purple-500/40",
    icon: Zap,
    features: ["Event Naming Rights", "Keynote Address", "Exclusive Branding", "Student Data Access"]
  },
  {
    name: "GOLD",
    price: "1,500,000",
    color: "from-yellow-400 via-amber-500 to-yellow-600",
    shadow: "shadow-yellow-500/40",
    icon: TrophyIcon, // Defined below
    features: ["Formal MOU", "Marketing Speech", "Media Wall Logo", "Award Shield"]
  },
  {
    name: "SILVER",
    price: "750,000",
    color: "from-slate-300 via-slate-400 to-slate-500",
    shadow: "shadow-slate-500/40",
    icon: StarIcon,
    features: ["30% Stall Discount", "Certificates Branding", "Seminar Access", "Social Media Shoutout"]
  },
  {
    name: "BRONZE",
    price: "300,000",
    color: "from-orange-700 via-orange-600 to-red-700",
    shadow: "shadow-orange-500/40",
    icon: CheckCircle2,
    features: ["15% Stall Discount", "Logo on Brochures", "Media Wall Spot", "Certificate of Thanks"]
  }
];

export default function Sponsors() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SMEC_Proposal.pdf';
    link.download = 'SMEC_26_Sponsorship_Proposal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen md:mt-10 bg-black font-body text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 via-purple-500 to-yellow-500 origin-left z-50" />

      {/* --- STOCK TICKER --- */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-10 text-xs font-mono text-primary uppercase tracking-widest">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="flex items-center gap-2">
                    <TrendingUp size={14} /> SMEC GROWTH: +40% YOY • REACH: 1.2M • FOOTFALL: 5000+ •
                </span>
            ))}
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/80 to-zinc-950" />
        
        <div className="relative z-10 px-4 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md px-6 py-2 text-sm">
                    PAKISTAN'S LARGEST TECH OLYMPIAD
                </Badge>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
                    FUEL THE <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-400 to-yellow-600 animate-gradient-x">
                        REVOLUTION
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
                    Connect with 5000+ innovators, gamers, and future leaders. <br/>
                    <span className="text-white font-bold">Your Brand. Their Future. One Stage.</span>
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button onClick={handleDownload} className="h-16 px-10 text-xl font-bold bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                        Download Proposal <Download className="ml-3 h-5 w-5" />
                    </Button>
                    <Button 
                     onClick={() => document.getElementById('tiers').scrollIntoView({ behavior: 'smooth' })}
                    variant="outline" className="h-16 px-10 text-xl border-white/20 hover:bg-white/10 text-white backdrop-blur-md">
                        View Packages
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- LIVE ANALYTICS DASHBOARD --- */}
      <section className="py-32 bg-zinc-950 relative border-t border-white/10">
         <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="font-display text-5xl font-bold mb-2">Impact Metrics</h2>
                    <p className="text-zinc-500 text-lg">Real-time growth data from previous years.</p>
                </div>
                <div className="flex gap-4">
                    <StatPill label="Reach" value="1.2M+" color="text-green-400" />
                    <StatPill label="Attendees" value="5000+" color="text-cyan-400" />
                </div>
            </div>

            <div className="p-1 rounded-3xl bg-linear-to-br from-white/10 to-transparent">
                <div className="bg-black/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/5 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="h-[400px]">
                            <h3 className="font-display text-xl mb-6 text-zinc-300 flex items-center gap-2">
                                <Users className="text-purple-500" /> Attendance Growth
                            </h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={growthData}>
                                    <defs>
                                        <linearGradient id="colorP" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                    <XAxis dataKey="year" stroke="#555" tick={{fill: '#666'}} />
                                    <YAxis stroke="#555" tick={{fill: '#666'}} />
                                    <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                    <Area type="monotone" dataKey="participants" stroke="#a855f7" strokeWidth={3} fill="url(#colorP)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="h-[400px]">
                            <h3 className="font-display text-xl mb-6 text-zinc-300 flex items-center gap-2">
                                <TrendingUp className="text-cyan-500" /> Social Reach
                            </h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={growthData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                                    <XAxis dataKey="year" stroke="#555" tick={{fill: '#666'}} />
                                    <YAxis stroke="#555" tickFormatter={(val) => `${val/1000}k`} tick={{fill: '#666'}} />
                                    <Tooltip cursor={{fill: '#ffffff05'}} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                    <Bar dataKey="reach" fill="#22d3ee" radius={[4, 4, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- PREMIUM SPONSORSHIP TIERS --- */}
      <section id="tiers" className="py-32 bg-black relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-display text-6xl font-black text-center mb-24 uppercase tracking-tight">
                Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-yellow-500">Legacy</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tiers.map((tier, index) => (
                    <div key={tier.name} className="group relative h-full">
                        {/* Hover Glow */}
                        <div className={`absolute -inset-0.5 rounded-3xl bg-linear-to-b ${tier.color} opacity-20 group-hover:opacity-100 blur transition duration-500`} />
                        
                        <div className="relative h-full flex flex-col bg-zinc-950 rounded-[22px] p-8 border border-white/5 overflow-hidden">
                             {/* Top Badge */}
                             <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${tier.color} shadow-[0_0_20px_currentColor]`} />
                             
                             <div className="mb-8 text-center">
                                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Investment</p>
                                <p className={`text-3xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mt-2`}>
                                    {tier.price}
                                </p>
                             </div>

                             <ul className="space-y-4 mb-10 flex-1">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <CheckCircle2 className={`h-5 w-5 shrink-0 text-zinc-600 group-hover:text-white transition-colors`} />
                                        {feat}
                                    </li>
                                ))}
                             </ul>

                             <Button className={`w-full h-12 font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all border-none`}>
                                Select Plan
                             </Button>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- TRUSTED BY --- */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Our Past Alliances</h2>
            <div className="h-1 w-20 bg-black mx-auto" />
        </div>
        <SponsorMarquee />
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071')] bg-cover bg-center opacity-30" />
         <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
         
         <div className="relative z-10 text-center px-4">
             <h2 className="font-display text-5xl md:text-7xl font-black mb-8">READY TO DOMINATE?</h2>
             <Button onClick={handleDownload} className="h-16 px-12 text-xl font-bold bg-purple-600 hover:bg-purple-500 shadow-[0_0_50px_rgba(147,51,234,0.6)] scale-100 hover:scale-105 transition-transform">
                Download Proposal PDF <ArrowRight className="ml-3" />
             </Button>
         </div>
      </section>

      <Footer />
    </div>
  );
}

// Small Components
const StatPill = ({ label, value, color }) => (
    <div className="flex flex-col px-4 py-2 bg-white/5 rounded-lg border border-white/5">
        <span className={`font-display text-xl font-bold ${color}`}>{value}</span>
        <span className="text-[10px] text-zinc-500 uppercase">{label}</span>
    </div>
);
