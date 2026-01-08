import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import LegacySection from '@/components/about/LegacySection';
// import LeadershipSection from '@/components/about/LeadershipSection';
// import DirectorsSection from '@/components/about/DirectorsSection';
// import GameLeadsSection from '@/components/about/GameLeadsSection';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-black font-body text-white">
      <Navbar />
      <main className="pt-20">
        <LegacySection />
        {/* <LeadershipSection />
        <DirectorsSection />
        <GameLeadsSection /> */}
      </main>
    </div>
  );
};

export default About;