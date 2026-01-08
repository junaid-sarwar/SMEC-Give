import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2, Trophy } from 'lucide-react';

// Adjust paths based on your folder structure
import { Navbar } from '@/components/Navbar'; 
// import { Footer } from '@/components/layout/Footer'; // Uncomment if you have a Footer
import { EventCard } from '@/components/EventCard'; 
import { CategoryFilter } from '@/components/CategoryFilter';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 1. FETCH EVENTS FROM API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('https://smec-backend.onrender.com/api/events/all');
        if (data.success) {
          setEvents(data.events);
        }
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // 2. FILTER LOGIC
  // Your backend stores category as specific strings: "E-Games", "Geeks", "General Games"
  // Ensure your CategoryFilter component passes these exact strings.
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Events</span>
          </h1>
          <p className="text-zinc-400 font-body max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our complete lineup of competitions. Filter by category to find your perfect match and dominate the arena.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 h-64">
             <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
             <p className="text-zinc-500 animate-pulse">Loading Competition Data...</p>
          </div>
        ) : (
          <>
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {filteredEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>

            {/* No Results State */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-20 bg-zinc-900/30 border border-white/5 rounded-2xl">
                <Trophy className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Events Found</h3>
                <p className="text-zinc-500 font-body text-lg">
                  There are no active competitions in this category right now.
                </p>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 text-primary hover:underline hover:text-primary/80"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* <Footer /> */}
    </div>
  );
}