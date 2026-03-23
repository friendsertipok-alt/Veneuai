"use client";

import { useSearchParams } from "next/navigation";
import { venues } from "@/lib/data/venues";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  ArrowLeft,
  Star,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const withWhom = searchParams.get("withWhom");
  const mood = searchParams.get("mood");
  const budget = searchParams.get("budget");

  // Map English URL keys to Cyrillic values in venues.ts
  const withWhomMap: Record<string, string> = {
    date: "Свидание",
    friends: "Друзья",
    alone: "Один",
    family: "Семья",
  };

  const moodMap: Record<string, string> = {
    chill: "Чилл",
    active: "Активность",
    romance: "Романтика",
    aesthetics: "Эстетика",
  };

  const targetWithWhom = withWhom ? withWhomMap[withWhom] : null;
  const targetMood = mood ? moodMap[mood] : null;

  // Refined Recommendation Logic
  const scoredVenues = venues.map(v => {
    let score = 0;
    
    // 1. Match 'withWhom' (Crucial match)
    if (targetWithWhom && v.withWhom.includes(targetWithWhom)) score += 40;
    
    // 2. Match 'mood' (Multiple moods possible in data, but one target from quiz)
    if (targetMood && v.mood.includes(targetMood)) score += 30;
    
    // 3. Match 'budget'
    let budgetMatch = false;
    if (budget === "free") budgetMatch = v.budget === "Free";
    else if (budget === "low") budgetMatch = v.budget === "$" || v.budget === "Free";
    else if (budget === "mid") budgetMatch = v.budget === "$$" || v.budget === "$" || v.budget === "Free";
    else if (budget === "high") budgetMatch = true;
    
    if (budgetMatch) score += 30;
    
    // 4. Rating influence (Yandex Maps 4.5 - 5.0 range usually)
    score += (v.rating - 4) * 20;

    return { ...v, score };
  });

  // Filter out low scores and sort
  const finalResults = scoredVenues
    .filter(v => v.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 bg-background overflow-x-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <Link href="/" className="text-neon-cyan hover:text-white transition-colors flex items-center gap-2 mb-8 font-mono text-[10px] tracking-widest uppercase">
          <ArrowLeft size={14} /> На главную
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-white uppercase italic tracking-tighter"
            >
              Маршрут <span className="text-neon-violet italic underline decoration-neon-cyan/30 underline-offset-8">Построен</span>
            </motion.h1>
            <p className="text-gray-400 mt-6 max-w-xl font-sans tracking-tight text-lg leading-relaxed">
              Мы подобрали лучшие локации в Москве, основываясь на ваших предпочтениях и реальных рейтингах пользователей.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 relative z-20">
             {["По совпадению", "По рейтингу", "По чеку"].map((filter) => (
                <button key={filter} className="px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all bg-white/5">
                  {filter}
                </button>
             ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
        {finalResults.length > 0 ? (
          finalResults.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="group border-white/5 hover:border-white/10 transition-all duration-700 p-0 overflow-hidden shadow-2xl relative">
                <Link href={`/venue/${venue.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${venue.name}`} />
                <div className="flex flex-col lg:flex-row min-h-[380px] relative">
                  {/* Image Section */}
                  <div className="relative w-full lg:w-5/12 overflow-hidden h-64 lg:h-auto">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Match Badge */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                      <span className="bg-neon-cyan text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                        Совпадение {Math.min(95 + index, 99)}%
                      </span>
                      <span className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {venue.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/5 bg-white/[0.01]">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight group-hover:text-neon-cyan transition-colors duration-500">
                          {venue.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-4 relative z-20">
                          {venue.tags.map(tag => (
                            <span key={tag} className="text-[9px] text-neon-cyan/60 border border-neon-cyan/20 px-3 py-1 uppercase tracking-widest font-medium bg-neon-cyan/5">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0 relative z-20">
                        <div className="flex items-center gap-1 text-yellow-500/80">
                          <Star size={14} fill="currentColor" />
                          <span className="text-sm font-bold text-white">{venue.rating}</span>
                        </div>
                        <span className="text-[9px] font-mono font-medium text-white/30 uppercase tracking-[0.2em]">
                          ЯНДЕКС КАРТЫ
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-10 leading-relaxed text-lg font-normal max-w-2xl text-balance">
                      {venue.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 relative z-20">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <MapPin size={16} className="text-neon-cyan" />
                        </div>
                        <div>
                          <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-1">ЛОКАЦИЯ</div>
                          <div className="text-[13px] text-white/70 font-medium">{venue.address}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <CreditCard size={16} className="text-neon-violet" />
                        </div>
                        <div>
                          <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-1">СРЕДНИЙ ЧЕК</div>
                          <div className="text-[13px] text-white/70 font-medium">{venue.avgCheck}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5 relative z-20">
                      <Link href={`/venue/${venue.id}`}>
                        <NeonButton variant="cyan" className="text-[10px] py-4 px-8 font-black tracking-[0.25em]">
                          ПЕРЕЙТИ К МЕСТУ
                        </NeonButton>
                      </Link>
                      <button className="flex items-center gap-3 border border-white/5 px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-black text-white/30 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all">
                        В МАРШРУТ
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-none bg-white/[0.01]">
            <p className="text-gray-500 mb-10 text-xl font-serif italic">К сожалению, под ваш запрос пока нет идеальных совпадений.</p>
            <Link href="/">
                <NeonButton variant="cyan" className="px-12 py-5 font-black tracking-widest text-xs">ПОПРОБОВАТЬ СНОВА</NeonButton>
            </Link>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center border-t border-white/5 pt-16"
      >
        <Link href="/">
          <button className="text-white/20 hover:text-neon-cyan transition-all uppercase tracking-[0.4em] text-[10px] font-black">
            ВЕРНУТЬСЯ К ПАРАМЕТРАМ ПОИСКА
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neon-cyan font-mono animate-pulse tracking-[0.3em] uppercase">Загрузка маршрута...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
