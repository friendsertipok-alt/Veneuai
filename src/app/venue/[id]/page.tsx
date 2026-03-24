"use client";

import { useParams, useRouter } from "next/navigation";
import { venues } from "@/lib/data/venues";
import { motion } from "framer-motion";
import { 
  MapPin, 
  ArrowLeft,
  Star,
  Clock,
  Navigation,
  Info,
  Tag,
  CreditCard
} from "lucide-react";
import Link from "next/link";

export default function VenueDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const venue = venues.find(v => v.id === id);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-butter p-6 text-center">
        <div className="bg-white editorial-border editorial-shadow p-12 max-w-md">
          <h1 className="text-4xl font-black text-navy mb-6 uppercase">МЕСТО НЕ НАЙДЕНО</h1>
          <Link href="/">
            <button className="bg-rust text-butter px-8 py-4 font-black uppercase tracking-widest editorial-shadow-sm">ВЕРНУТЬСЯ</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-butter pb-24 selection:bg-navy selection:text-butter">
      {/* Top Navigation Bar */}
      <nav className="p-6 md:p-10 flex justify-between items-center border-b-2 border-navy/10 bg-butter/80 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-3 text-rust hover:text-navy transition-all font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> НАЗАД К СПИСКУ
        </button>
        <div className="text-[10px] font-black text-navy uppercase tracking-[0.4em] hidden md:block">ВЫБОР: {venue.name}</div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Visual & Info Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Poster Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-navy text-butter px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]">
                  {venue.category}
                </span>
                <div className="flex items-center gap-2 bg-white editorial-border px-4 py-1.5">
                  <Star size={14} className="text-rust fill-rust" />
                  <span className="text-[12px] font-black text-navy">{venue.rating}</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-navy uppercase leading-[0.8] tracking-tighter">
                {venue.name.split(' ')[0]} <br/>
                <span className="text-rust italic">{venue.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            {/* Featured Image */}
            <div className="relative group">
               <div className="bg-white p-4 editorial-border editorial-shadow transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                 <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-navy text-butter p-8 editorial-shadow hidden md:block max-w-xs transform rotate-2">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2 border-b border-butter/20 pb-2">ЭКСПЕРТНОЕ МНЕНИЕ</div>
                  <p className="text-sm font-medium leading-relaxed italic">
                    «{venue.description}»
                  </p>
               </div>
            </div>

            {/* In-depth details */}
            <div className="bg-white editorial-border editorial-shadow p-10 md:p-16 space-y-12">
              <section>
                <h3 className="text-xs font-black text-rust uppercase tracking-[0.4em] mb-8 border-b-2 border-rust/10 pb-4 flex items-center gap-3">
                  <Info size={16} /> О ЛОКАЦИИ
                </h3>
                <div className="text-xl md:text-2xl text-navy/80 font-medium leading-relaxed whitespace-pre-line">
                  {venue.fullDescription}
                </div>
              </section>

              {/* Dynamic Gallery */}
              <section>
                <h3 className="text-xs font-black text-rust uppercase tracking-[0.4em] mb-8 border-b-2 border-rust/10 pb-4 flex items-center gap-3">
                  ГАЛЕРЕЯ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {venue.images.map((img, i) => (
                    <div key={i} className="bg-butter p-2 editorial-border hover:rotate-1 transition-transform cursor-pointer overflow-hidden">
                       <img src={img} alt={`${venue.name} ${i}`} className="w-full h-64 object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sticky Editorial Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-navy text-butter p-10 editorial-shadow space-y-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-rust shrink-0" />
                    <div>
                      <div className="text-[10px] font-black text-butter/40 uppercase tracking-widest mb-1">АДРЕС</div>
                      <div className="text-lg font-bold leading-tight uppercase">{venue.address || "МОСКВА, ЦЕНТР"}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CreditCard size={24} className="text-rust shrink-0" />
                    <div>
                      <div className="text-[10px] font-black text-butter/40 uppercase tracking-widest mb-1">СРЕДНИЙ ЧЕК</div>
                      <div className="text-lg font-bold leading-tight">{venue.avgCheck}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Tag size={24} className="text-rust shrink-0" />
                    <div className="flex flex-wrap gap-2">
                       {venue.tags.map(t => (
                         <span key={t} className="text-[10px] border border-butter/20 px-2 py-1 font-black">#{t.toUpperCase()}</span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-butter/10 space-y-4">
                  <a href={venue.mapUrl} target="_blank" className="block text-center bg-rust text-butter py-5 font-black text-sm uppercase tracking-[0.2em] editorial-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95">
                    ПОСТРОИТЬ МАРШРУТ
                  </a>
                  <button className="w-full border-2 border-butter/20 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-butter hover:text-navy transition-all">ДОБАВИТЬ В ИЗБРАННОЕ</button>
                </div>
              </div>

              {/* Decorative Poster Bit */}
              <div className="bg-rust text-butter p-8 editorial-border editorial-shadow rotate-[-1deg] text-center">
                 <div className="text-5xl font-black italic mb-2 tracking-tighter">100%</div>
                 <div className="text-[10px] font-black tracking-[0.3em] uppercase">VERIFIED LOCATION</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
