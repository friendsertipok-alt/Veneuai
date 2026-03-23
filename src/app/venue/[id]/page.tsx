"use client";

import { useParams, useRouter } from "next/navigation";
import { venues } from "@/lib/data/venues";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";
import { 
  MapPin, 
  CreditCard, 
  ArrowLeft,
  Star,
  ExternalLink,
  Info,
  Tag
} from "lucide-react";
import Link from "next/link";

export default function VenueDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const venue = venues.find(v => v.id === id);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-6 uppercase">Локация не найдена</h1>
          <Link href="/">
            <NeonButton variant="cyan">Вернуться на главную</NeonButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={venue.image} 
          alt={venue.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        
        {/* Top Controls */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-3 bg-black/50 backdrop-blur-2xl border border-white/10 px-8 py-4 sm:px-6 sm:py-3 text-[11px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-neon-cyan hover:text-black transition-all shadow-xl"
            aria-label="Вернуться назад"
          >
            <ArrowLeft size={18} className="sm:size-4" /> Назад
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-neon-cyan text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em]">
                  {venue.category}
                </span>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/10">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-[11px] font-black text-white">{venue.rating}</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold ml-1">Яндекс Карты</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter italic">
                {venue.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <GlassCard className="p-10 md:p-14 border-white/5 bg-white/[0.02] shadow-2xl">
              <h2 className="flex items-center gap-3 text-white text-sm font-black uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/5">
                <Info size={18} className="text-neon-cyan" /> Описание места
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white text-2xl leading-relaxed font-serif italic mb-12 border-l-4 border-neon-cyan pl-8 py-2">
                  {venue.description}
                </p>
                <div className="text-gray-300 text-xl leading-relaxed whitespace-pre-line space-y-6">
                  {venue.fullDescription}
                </div>
              </div>

              {/* Photo Gallery Section - High Priority */}
              <div className="mt-20 pt-10 border-t border-white/5">
                <h3 className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.3em] mb-10">
                  <span className="w-8 h-[1px] bg-neon-cyan/50" /> ГАЛЕРЕЯ ЛОКАЦИИ
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {venue.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10"
                    >
                      <img 
                        src={img} 
                        alt={`${venue.name} view ${index + 1}`}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5">
                <h3 className="flex items-center gap-3 text-white text-sm font-black uppercase tracking-[0.3em] mb-8">
                  <Tag size={18} className="text-neon-violet" /> Особенности
                </h3>
                <div className="flex flex-wrap gap-4">
                  {venue.tags.map(tag => (
                    <span key={tag} className="bg-white/5 border border-white/10 px-6 py-3 text-[11px] text-white/70 uppercase tracking-widest font-black hover:border-black hover:bg-neon-cyan hover:text-black transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                  {venue.mood.map(mood => (
                    <span key={mood} className="bg-neon-violet/10 border border-neon-violet/30 px-6 py-3 text-[11px] text-neon-violet uppercase tracking-widest font-black">
                      {mood}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Sidebar Info - Sticky */}
          <div className="space-y-8 lg:sticky lg:top-8 self-start">
            <GlassCard className="p-10 border-white/5 bg-white/[0.03]">
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-sm bg-neon-cyan/10 flex items-center justify-center shrink-0 border border-neon-cyan/20 text-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-black mb-2">Адрес</div>
                    <div className="text-lg text-white font-bold leading-tight">{venue.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-sm bg-neon-violet/10 flex items-center justify-center shrink-0 border border-neon-violet/20 text-neon-violet shadow-[0_0_20px_rgba(180,0,255,0.1)]">
                    <CreditCard size={28} />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-black mb-2">Средний чек</div>
                    <div className="text-lg text-white font-bold leading-tight">{venue.avgCheck}</div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <a 
                    href={venue.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <NeonButton variant="cyan" className="w-full py-6 text-xs font-black tracking-[0.3em]">
                      ПОСТРОИТЬ МАРШРУТ
                    </NeonButton>
                  </a>
                  
                  <div className="flex items-center justify-between px-2 pt-6 border-t border-white/5">
                    <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Рейтинг</div>
                    <div className="flex items-center gap-2">
                       <Star size={14} className="text-neon-cyan fill-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                       <span className="text-xl font-display font-black text-white italic">{venue.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-10 border border-white/10 rounded-sm bg-gradient-to-br from-white/[0.03] to-transparent text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] font-black mb-6 leading-relaxed relative z-10">
                Это место идеально соответствует вашему запросу на <span className="text-neon-cyan">{venue.mood[0]}</span> и <span className="text-neon-violet">{venue.withWhom[0]}</span>
              </p>
              <div className="h-0.5 w-16 bg-neon-cyan/30 mx-auto group-hover:w-24 transition-all duration-500" />
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
