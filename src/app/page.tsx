"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  MapPin
} from "lucide-react";
import { useRouter } from "next/navigation";

const quizSteps = [
  {
    id: "withWhom",
    question: "С КЕМ ВЫ?",
    options: [
      { label: "СВИДАНИЕ", value: "date", icon: "❤️" },
      { label: "ДРУЗЬЯ", value: "friends", icon: "🙌" },
      { label: "В ОДИНОЧКУ", value: "alone", icon: "🧘" },
      { label: "СЕМЬЯ", value: "family", icon: "🏠" },
    ],
  },
  {
    id: "mood",
    question: "ВАШЕ НАСТРОЕНИЕ?",
    options: [
      { label: "ЧИЛЛ", value: "chill", icon: "🌊" },
      { label: "АКТИВНОСТЬ", value: "active", icon: "⚡" },
      { label: "РОМАНТИКА", value: "romance", icon: "🕯️" },
      { label: "ЭСТЕТИКА", value: "aesthetics", icon: "🎨" },
    ],
  },
  {
    id: "budget",
    question: "БЮДЖЕТ?",
    options: [
      { label: "БЕСПЛАТНО", value: "free", icon: "🎁" },
      { label: "ДО 1500 ₽", value: "low", icon: "🪙" },
      { label: "1500–3000 ₽", value: "mid", icon: "💸" },
      { label: "ОТ 3000 ₽", value: "high", icon: "💎" },
    ],
  },
  {
    id: "time",
    question: "ЖЕЛАЕМОЕ ВРЕМЯ?",
    options: [
      { label: "ДЕНЬ", value: "day", icon: "☀️" },
      { label: "НОЧЬ", value: "night", icon: "🌙" },
      { label: "ВЕЧЕР", value: "evening", icon: "🌆" },
      { label: "В ЛЮБОЕ ВРЕМЯ", value: "any", icon: "🕓" },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isStarted, setIsStarted] = useState(false);

  const handleSelect = (value: string) => {
    const currentId = quizSteps[step].id;
    const newAnswers = { ...answers, [currentId]: value };
    setAnswers(newAnswers);
    
    if (step < quizSteps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      const params = new URLSearchParams(newAnswers);
      router.push(`/results?${params.toString()}`);
    }
  };

  return (
    <main className="min-h-screen bg-butter overflow-x-hidden selection:bg-navy selection:text-butter">
      {/* Editorial Header */}
      <header className="p-6 md:p-10 flex justify-between items-start border-b-2 border-rust bg-butter sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="text-rust font-black tracking-[0.3em] text-[10px] uppercase mb-1">ИНТЕЛЛЕКТУАЛЬНЫЙ КОНСЬЕРЖ</span>
          <h1 className="text-4xl md:text-6xl font-black text-navy uppercase leading-[0.8] tracking-tighter">
            КУДА<br/>СЕГОДНЯ?
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <div className="flex items-center gap-2 text-rust font-bold text-xs uppercase mb-1">
            <MapPin size={14} /> МОСКВА
          </div>
          <div className="text-xs text-navy/60 font-medium">Ваш идеальный маршрут <br/> за 4 простых шага</div>
        </div>
      </header>

      <div className="relative flex flex-col items-center justify-center p-6 pt-12 md:pt-24 max-w-7xl mx-auto mb-20">
        {!isStarted ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Hero Text */}
            <div className="flex-1 space-y-8">
              <div className="inline-block bg-rust text-butter px-6 py-2 text-sm font-black uppercase tracking-widest editorial-shadow-sm transform -rotate-2">
                ВЫПУСК №01
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-navy leading-[0.85] tracking-tighter uppercase">
                НАЙДИТЕ <span className="text-rust italic">ТО САМОЕ</span> МЕСТО
              </h2>
              <p className="text-xl md:text-2xl text-navy/80 font-medium max-w-xl leading-relaxed">
                Забудьте о бесконечном поиске. Наш экспертный подбор найдет локацию под ваше настроение, бюджет и компанию.
              </p>
              
              <div className="pt-8 group">
                <button 
                  onClick={() => setIsStarted(true)}
                  className="bg-rust text-butter px-12 py-6 text-xl font-black uppercase tracking-[0.1em] editorial-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-4 active:scale-95"
                >
                  СОЗДАТЬ МАРШРУТ <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visual Element (Poster Style) */}
            <div className="hidden lg:block w-1/3 relative">
              <div className="w-full aspect-[3/4] bg-navy editorial-border editorial-shadow p-6 flex flex-col justify-between overflow-hidden relative group">
                <div className="text-butter text-7xl font-black leading-none opacity-10 select-none">MOSCOW<br/>VIBES<br/>2026</div>
                <div className="relative z-10">
                  <div className="bg-white p-2 editorial-border rotate-3 transform group-hover:rotate-0 transition-transform duration-500 mb-6">
                    <img 
                      src="/venues/image1.jpeg" 
                      alt="Atmosphere" 
                      className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="text-butter font-black text-[10px] space-y-2 uppercase tracking-widest">
                    <div className="border-b border-butter/20 pb-2">30+ ОТБОРНЫХ ЛОКАЦИЙ</div>
                    <div className="border-b border-butter/20 pb-2">АКТУАЛЬНОСТЬ: ВЕСНА 2026</div>
                    <div className="pb-2">БЫСТРЫЙ ПОИСК</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl"
          >
            {/* Quiz Container */}
            <div className="bg-white editorial-border editorial-shadow p-8 md:p-16 relative">
              {/* Step indicator */}
              <div className="absolute top-0 left-0 w-full h-2 bg-navy/10">
                <motion.div 
                  className="h-full bg-rust"
                  initial={{ width: 0 }}
                  animate={{ width: `${((step + 1) / quizSteps.length) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center mb-12">
                <button 
                  onClick={() => step > 0 ? setStep(s => s - 1) : setIsStarted(false)}
                  className="text-navy/40 hover:text-rust transition-colors flex items-center gap-2 font-black text-xs uppercase"
                >
                  <ArrowLeft size={16} /> НАЗАД
                </button>
                <div className="text-xs font-black text-navy uppercase tracking-widest">ШАГ {step + 1} ИЗ {quizSteps.length}</div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <h3 className="text-5xl md:text-7xl font-black text-navy uppercase leading-none tracking-tighter text-center">
                    {quizSteps[step].question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quizSteps[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        className="group flex items-center gap-6 p-6 border-2 border-navy/10 hover:border-rust text-left transition-all hover:bg-butter editorial-shadow-sm bg-white active:translate-x-1 active:translate-y-1 active:shadow-none"
                      >
                        <span className="text-4xl group-hover:rotate-12 transition-transform">{opt.icon}</span>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-navy/40 font-black uppercase tracking-widest mb-1">КАТЕГОРИЯ</span>
                          <span className="text-2xl font-black text-navy uppercase tracking-tight">{opt.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="mt-8 text-center text-navy/30 text-[10px] font-black uppercase tracking-[0.5em]">
              ВЫБОР REDESIGN 2026 EDITION
            </div>
          </motion.div>
        )}
      </div>

      {/* Decorative vertical text */}
      <div className="fixed bottom-0 left-0 w-full p-6 pointer-events-none flex justify-between items-end opacity-20 md:opacity-100 mix-blend-multiply">
         <div className="text-rust font-black text-[120px] leading-[0.7] transform rotate-90 origin-left -translate-x-12 hidden lg:block select-none pointer-events-none">TODAY?</div>
         <div className="text-navy font-black text-xs uppercase tracking-widest hidden md:block select-none pointer-events-none">EST. 2026 / MOSCOW EDITION</div>
      </div>
    </main>
  );
}
