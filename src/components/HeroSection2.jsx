import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Timer, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SmecLogo from '@/assets/logo-bg-crop2.png'; // Ensure this path is correct

export default function HeroSection2() {
  // Simple Countdown Logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set target date (e.g., Dec 29, 2025)
    const targetDate = new Date('2026-01-14T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-18 min-h-screen flex items-center overflow-hidden bg-background pt-20 lg:pt-0">
      
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none">
         <img src={SmecLogo} className="w-full h-full object-contain grayscale" alt="" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 via-background to-background z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px]" />


      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Presenter Tag */}
            <div className="inline-block animate-in slide-in-from-left-10 duration-700">
                <span className="text-primary font-display font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 block">
                    Department of CS & IT Presents
                </span>
            </div>

            {/* MAIN TITLE (Massive like Procom) */}
            <h1 className="font-display text-6xl md:text-9xl font-black leading-none tracking-tighter text-white animate-in slide-in-from-bottom-10 duration-1000 delay-100">
              SMEC<span className="text-primary">'26</span>
            </h1>

            {/* TAGLINE */}
            <div className="space-y-2 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
                <h2 className="font-body text-xl md:text-3xl font-bold text-zinc-300 tracking-wide uppercase">
                    <span className="text-primary">Speed</span> <span className="text-zinc-600">|</span> 
                    <span className="text-white"> Mind</span> <span className="text-zinc-600">|</span> 
                    <span className="text-primary"> Execution</span> <span className="text-zinc-600">|</span> 
                    <span className="text-white"> Competition</span>
                </h2>
                <p className="text-white max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
                    The ultimate university competition platform. From intense E-Sports battles to mind-bending coding challenges — prove your skills and claim glory.
                </p>
            </div>

             {/* COUNTDOWN / CLOSED SECTION */}
            <div className="min-h-[100px] flex items-center justify-center lg:justify-start transition-all duration-500">
              {isExpired ? (
                /* --- THE CLOSED STATE (Flyer Inspired) --- */
                <div className="group relative flex flex-col items-center lg:items-start gap-2 animate-in fade-in zoom-in-95 duration-700">
                  <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-zinc-900/80 border-2 border-red-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                    <div className="relative">
                       <Lock className="w-8 h-8 text-red-500 animate-pulse" />
                       <div className="absolute inset-0 blur-md bg-red-500/20 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-2xl md:text-3xl font-black italic tracking-tighter text-white uppercase leading-none">
                        Registrations <span className="text-red-500">Closed</span>
                      </span>
                      <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase mt-1">
                        Arena access restricted to registered users
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* --- THE ACTIVE TIMER --- */
                <div className="flex gap-4 md:gap-8 font-display text-white">
                  {[
                    { label: 'Days', val: timeLeft.days },
                    { label: 'Hours', val: timeLeft.hours },
                    { label: 'Mins', val: timeLeft.minutes },
                    { label: 'Secs', val: timeLeft.seconds }
                  ].map((unit, idx) => (
                    <div key={unit.label} className="flex items-center gap-4 md:gap-8">
                      <div className="text-center">
                        <div className="text-4xl md:text-6xl font-black tracking-tighter">{unit.val}</div>
                        <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{unit.label}</div>
                      </div>
                      {idx !== 3 && <div className="text-3xl md:text-5xl font-bold text-yellow-500 self-start mt-1">:</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <div className='flex flex-col gap-3'>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] text-center lg:text-left">
                  {isExpired ? "Phase One: Complete" : "Join the Elite"}
                </p>
                <div className="flex gap-4 flex-col md:flex-row items-center">
                  <Button 
                    variant={isExpired ? "secondary" : "cyber"} 
                    size="xl" 
                    disabled={isExpired}
                    className={cn(
                        "h-14 px-10 text-lg font-black tracking-widest transition-all duration-500",
                        isExpired 
                          ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed opacity-80" 
                          : "shadow-[0_0_50px_-10px_hsl(282_84%_50%_0.6)]"
                    )}
                    asChild={!isExpired}
                  >
                    {isExpired ? (
                      <span className="flex items-center gap-2">ENTRY CLOSED</span>
                    ) : (
                      <Link to="/signup">
                        REGISTER NOW <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                      </Link>
                    )}
                  </Button>

                  <Button variant="outline" size="xl" asChild className="h-14 px-10 text-lg border-white/10 hover:bg-white/5 font-bold">
                    <Link to="/events">VIEW ARENAS</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>


          {/* --- RIGHT SIDE: BIG 3D LOGO --- */}
          <div className="relative flex justify-center lg:justify-end animate-in zoom-in-50 duration-1000 delay-200">
            
            {/* Glowing Circle behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] animate-pulse-slow" />
            
            {/* The Main Logo */}
            <img 
                src={SmecLogo} 
                alt="SMEC Logo" 
                className="relative z-10 w-[300px] md:w-[500px] object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-float"
            />

            {/* Decorative Floating Elements (Orbiting) */}
            {/* <div className="absolute top-0 right-10 p-3 bg-zinc-900/80 backdrop-blur-md border border-primary/30 rounded-xl shadow-lg animate-pulse hidden md:block">
                <Trophy className="w-8 h-8 text-yellow-500" />
            </div> */}
            <div className="absolute bottom-10 left-10 p-3 bg-zinc-900/80 backdrop-blur-md border border-primary/30 rounded-xl shadow-lg animate-bounce hidden md:block" style={{ animationDelay: '1s' }}>
                <Timer className="w-8 h-8 text-primary" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Helper for conditional classes
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}