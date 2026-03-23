"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Users, 
  Heart, 
  User, 
  Users2, 
  Zap, 
  Camera, 
  Coffee, 
  Moon,
  Coins,
  Sun,
  Snowflake,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "withWhom",
    question: "С кем идем?",
    options: [
      { id: "date", label: "Свидание", icon: Heart },
      { id: "friends", label: "Друзья", icon: Users },
      { id: "alone", label: "Один", icon: User },
      { id: "family", label: "Семья", icon: Users2 },
    ],
  },
  {
    id: "mood",
    question: "Настроение и формат?",
    options: [
      { id: "chill", label: "Чилл", icon: Coffee },
      { id: "active", label: "Активность", icon: Zap },
      { id: "romance", label: "Романтика", icon: Heart },
      { id: "aesthetics", label: "Эстетика", icon: Camera },
    ],
  },
  {
    id: "budget",
    question: "Ваш бюджет?",
    options: [
      { id: "free", label: "Бесплатно", icon: Snowflake },
      { id: "low", label: "до 1500₽", icon: Coins },
      { id: "mid", label: "1500 - 3500₽", icon: Coins },
      { id: "high", label: "от 3500₽", icon: Coins },
    ],
  },
  {
    id: "time",
    question: "Желаемое время?",
    options: [
      { id: "day", label: "День", icon: Sun },
      { id: "night", label: "Ночь", icon: Moon },
      { id: "winter", label: "Зима", icon: Snowflake },
      { id: "any", label: "В любое время", icon: Zap },
    ],
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: optionId };
    setAnswers(newAnswers);
    
    // Auto-advance with small delay for better feel
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const isFinished = currentStep === steps.length - 1 && answers[steps[currentStep].id];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-24 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 text-white uppercase italic">
          VENUE<span className="text-neon-cyan">AI</span>
        </h1>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-neon-violet to-neon-cyan mx-auto mb-4 sm:mb-6" />
        <p className="text-gray-400 font-sans tracking-[0.4em] uppercase text-[9px] md:text-xs opacity-70">
          Интеллектуальный подбор впечатлений в Москве
        </p>
      </motion.div>

      {/* Quiz Container */}
      <div className="w-full max-w-2xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <GlassCard className="min-h-[350px] sm:min-h-[420px] flex flex-col justify-center border-white/5 p-6 sm:p-10">
              <div className="mb-6 sm:mb-10 relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neon-cyan font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
                    Этап {currentStep + 1} из 4
                  </span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} className={`h-1 w-4 sm:w-6 ${i <= currentStep ? "bg-neon-cyan" : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight leading-tight">
                  {steps[currentStep].question}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {steps[currentStep].options.map((option) => {
                  const Icon = option.icon;
                  const isSelected = answers[steps[currentStep].id] === option.id;
                  
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(option.id)}
                      className={`
                        flex items-center gap-4 p-4 sm:p-5 text-left border transition-all duration-300 relative group
                        ${isSelected 
                          ? "border-neon-cyan bg-neon-cyan/20 text-neon-cyan" 
                          : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-white/5"}
                      `}
                    >
                      <div className={`p-1.5 sm:p-2 rounded-none border ${isSelected ? "border-neon-cyan" : "border-white/10"}`}>
                        <Icon size={16} />
                      </div>
                      <span className="font-display uppercase tracking-widest text-[10px] sm:text-[11px] font-bold">{option.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-6 sm:mt-10 text-[9px] sm:text-[10px] text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors group"
                >
                  <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Вернуться назад
                </button>
              )}
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Finishing Animation */}
        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 sm:mt-12 flex justify-center"
            >
              <Link href={`/results?withWhom=${answers.withWhom}&mood=${answers.mood}&budget=${answers.budget}&time=${answers.time}`} className="w-full sm:w-auto">
                <NeonButton variant="cyan" className="group text-[12px] sm:text-sm font-bold tracking-widest w-full py-4 px-8">
                  Найти идеальные места
                  <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                </NeonButton>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Subtle background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </div>
  );
}
