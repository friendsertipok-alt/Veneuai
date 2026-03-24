"use client";

import { useSearchParams } from "next/navigation";
import { venues } from "@/lib/data/venues";
import { motion } from "framer-motion";
import { 
  MapPin, 
  ArrowLeft,
  Star,
  Clock,
  Navigation
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const withWhom = searchParams.get("withWhom");
  const mood = searchParams.get("mood");
  const budget = searchParams.get("budget");
  const time = searchParams.get("time");

  // Map URL keys to Cyrillic values in venues.ts
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

  // Recommendation Logic
  const scoredVenues = venues.map(v => {
    let score = 0;
    if (targetWithWhom && v.withWhom.includes(targetWithWhom)) score += 40;
    if (targetMood && v.mood.includes(targetMood)) score += 30;
    
    let budgetMatch = false;
    if (budget === "free") budgetMatch = v.budget === "Free";
    else if (budget === "low") budgetMatch = v.budget === "$" || v.budget === "Free";
    else if (budget === "mid") budgetMatch = v.budget === "$$" || v.budget === "$" || v.budget === "Free";
    else if (budget === "high") budgetMatch = true;
    if (budgetMatch) score += 30;
    
    score += (v.rating - 4) * 20;
    return { ...v, score };
  });

  const finalResults = scoredVenues
    .filter(v => v.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-20 bg-butter selection:bg-navy selection:text-butter">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <Link href="/" className="text-rust hover:text-navy transition-colors flex items-center gap-2 mb-10 font-black text-xs uppercase tracking-widest">
          <ArrowLeft size={16} strokeWidth={3} /> НАЗАД К ПОИСКУ
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-4 border-navy pb-12">
          <div className="max-w-3xl">
            <span className="bg-rust text-butter px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block">ОТЧЕТ №2026</span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black text-navy uppercase leading-[0.85] tracking-tighter"
            >
              МАРШРУТ <span className="text-rust italic">ГРАМОТНО</span> ПОСТРОЕН
            </motion.h1>
            <p className="text-navy/70 mt-8 font-medium text-xl leading-relaxed">
              Мы проанализировали базу из 30+ авторских локаций специально для вашего запроса. Вот лучшие совпадения:
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2 shrink-0">
             <div className="text-[10px] text-navy/40 font-black uppercase tracking-widest">ЛОКАЦИЯ</div>
             <div className="text-2xl font-black text-navy uppercase">МОСКВА, РФ</div>
          </div>
        </div>
      </div>

      {/* Grid of Posters */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {finalResults.length > 0 ? (
          finalResults.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white editorial-border editorial-shadow h-full flex flex-col transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none overflow-hidden relative">
                <Link href={`/venue/${venue.id}`} className="absolute inset-0 z-20" />
                
                {/* Poster Header */}
                <div className="p-5 border-b-2 border-navy/10 flex justify-between items-center bg-navy text-butter">
                  <span className="text-[10px] font-black tracking-widest uppercase">{venue.category}</span>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-black">{venue.rating}</span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-navy/10">
                   <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 right-4 bg-rust text-butter px-3 py-1 font-black text-[10px] uppercase tracking-widest editorial-shadow-sm">
                      MATCH {Math.min(95 + index, 99)}%
                   </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-3xl font-black text-navy uppercase leading-none tracking-tighter mb-4 group-hover:text-rust transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-navy/60 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {venue.description}
                  </p>
                  
                  <div className="mt-auto space-y-4 pt-4 border-t-2 border-navy/5">
                    <div className="flex items-center gap-3 text-navy/40">
                      <MapPin size={14} className="shrink-0" />
                      <span className="text-[10px] font-black uppercase tracking-widest truncate">{venue.address}</span>
                    </div>
                    
                    <Link href={`/venue/${venue.id}`} className="block relative z-30">
                      <button className="w-full bg-navy text-butter py-4 font-black text-xs uppercase tracking-[0.2em] editorial-shadow-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                        ОТКРЫТЬ МЕСТО
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-white editorial-border editorial-shadow">
            <h2 className="text-4xl font-black text-navy uppercase mb-6">НИЧЕГО НЕ НАЙДЕНО</h2>
            <p className="text-navy/60 mb-10 font-bold uppercase tracking-widest">Попробуйте изменить параметры поиска</p>
            <Link href="/">
              <button className="bg-rust text-butter px-12 py-5 font-black text-sm uppercase tracking-widest editorial-shadow active:translate-x-1 active:translate-y-1 active:shadow-none">ВЕРНУТЬСЯ</button>
            </Link>
          </div>
        )}
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block border-2 border-navy/20 px-8 py-4 text-[10px] text-navy/40 font-black uppercase tracking-[0.5em]">
          КОНЕЦ ОТЧЕТА — VENUEAI 2026
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-butter flex items-center justify-center">
        <div className="text-navy font-black animate-pulse tracking-[0.5em] uppercase text-xl">АНАЛИЗИРУЕМ...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
