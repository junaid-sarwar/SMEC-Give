// Import images (Make sure these are in src/assets/teams/)
import president from '@/assets/teams/president.jpg';
import vp from '@/assets/teams/vp.jpg';
import genSec from '@/assets/teams/gen_sec.jpg';
import execSec from '@/assets/teams/exec_sec.jpg';
import dirMarketing from '@/assets/teams/dir_marketing.jpg';
import dirGraphics from '@/assets/teams/dir_graphics.jpg';
import dirSales1 from '@/assets/teams/dir_sales1.jpg'; // Uzair
import dirSales2 from '@/assets/teams/dir_sales2.jpg'; // Eiman
import headAmb from '@/assets/teams/head_ambassadors.jpg';
import dirEgamesSolo from '@/assets/teams/dir_egames_solo.jpg';
import dirEgamesMulti from '@/assets/teams/dir_egames_multi.jpg';
import dirGeeks from '@/assets/teams/dir_geeks1.jpg';
import dirGeeks2 from '@/assets/teams/dir_geeks2.jpg';
import dirGeneral from '@/assets/teams/dir_general.jpg';
import dirGeneral2 from '@/assets/teams/dir_general2.jpg';
import dirProtocol from '@/assets/teams/dir_protocol.jpg';
import dirGuest from '@/assets/teams/dir_guest.jpg';
import treasurer from '@/assets/teams/treasurer.jpg';
import strategic from '@/assets/teams/strategic.jpg';
import headPhoto from '@/assets/teams/head_photography.jpg';
import dirDoc from '@/assets/teams/dir_doc.jpg';
import brand from '@/assets/teams/brand.jpg';
import headofSmec from '../assets/teams/head-smec.png'
// HEAD OF SMEC (Placeholder)
export const headOfSmec = {
  name: "Miss Ayesha Urooj",
  role: "Head of SMEC",
  image: headofSmec
};

// CORE HIERARCHY
export const coreTeam = {
  president: { name: "Syed Arham Ahmed", role: "President", image: president },
  vp: { name: "Furaat Zaidi", role: "Vice President", image: vp },
  
  // Middle Layer
  execs: [
    { name: "Annus Ahmed", role: "General Secretary", image: genSec },
    { name: "Umer Khan", role: "Executive Secretary", image: execSec },
    { name: "Ali Anwer", role: "Brand Strategist", image: brand },
    { name: "Agha Abdul Raafay", role: "Treasurer", image: treasurer },
  ],

  // Directors Layer
  directors: [
    { name: "Izma Sabir", role: "Director Marketing", image: dirMarketing },
    { name: "Zayan Ahmed Khan", role: "Director Graphics", image: dirGraphics },
    { name: "Uzair Siddiqui", role: "Director Sales", image: dirSales1 },
    { name: "Eiman Ahmed", role: "Director Sales", image: dirSales2 },
    { name: "Syed Saaim Mustafa", role: "Head of Ambassadors", image: headAmb },
    { name: "M. Talha Majeed", role: "Director E-Games Solo", image: dirEgamesSolo },
    { name: "Rehan Khalil Ahmed", role: "Director E-Games Multi", image: dirEgamesMulti },
    { name: "Saad Rizvi", role: "Director Geeks", image: dirGeeks },
    { name: "Areej Fatima", role: "Director Geeks", image: dirGeeks2 }, // Add separate image if diff
    { name: "M. Ammar Qureshi", role: "Director General Games", image: dirGeneral },
    { name: "Afra Mamji", role: "Director General Games", image: dirGeneral2 }, // Add separate image if diff
    { name: "M. Hasnain Qasim", role: "Director Security & Protocol", image: dirProtocol },
    { name: "Syed Salik Alvi", role: "Director Guest Affairs", image: dirGuest },
    { name: "Talha Mughal", role: "Strategic Mentor", image: strategic },
    { name: "Muneeb Ahmed", role: "Head of Photography", image: headPhoto },
    { name: "Ashna Shoaib", role: "Director Documentation", image: dirDoc },
  ]
};