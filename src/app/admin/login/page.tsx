"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Ошибка авторизации");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setLoading(false);
        return;
      }
      
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError("Не удалось соединиться с сервером.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-butter flex items-center justify-center p-6 selection:bg-navy selection:text-butter font-sans">
      <motion.div 
        animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white editorial-border editorial-shadow p-8 md:p-10 space-y-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-rust text-butter px-4 py-1 text-[10px] font-black tracking-widest uppercase">
          SECURE LOG
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-navy text-butter rounded-none editorial-border mb-2">
            <ShieldCheck size={36} strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-black text-navy tracking-tighter uppercase leading-[0.9]">
            ВХОД В <span className="text-rust italic">РЕДАКЦИЮ</span>
          </h1>
          <p className="text-xs text-navy/60 font-medium tracking-wide uppercase">
            Панель управления интеллектуальным консьержем
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 relative">
            <label className="text-[10px] font-black tracking-[0.2em] text-rust uppercase block">
              КОД ДОСТУПА
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                disabled={loading}
                className="w-full bg-butter/30 text-navy placeholder:text-navy/30 px-5 py-4 font-mono text-lg font-bold editorial-border focus:outline-none focus:bg-white focus:ring-2 focus:ring-rust transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/50 hover:text-navy focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-rust/10 border border-rust text-rust p-4 text-xs font-bold uppercase tracking-wider leading-relaxed"
            >
              ⚠ {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy hover:bg-rust text-butter font-black text-sm tracking-[0.1em] py-5 px-6 uppercase flex items-center justify-center gap-3 transition-colors duration-300 editorial-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            {loading ? "ПРОВЕРКА КОДА..." : "ВОЙТИ В ПАНЕЛЬ"} 
            {!loading && <ArrowRight size={18} strokeWidth={3} />}
          </button>
        </form>

        <div className="border-t border-navy/10 pt-6 text-center">
          <p className="text-[9px] text-navy/40 font-semibold uppercase tracking-widest">
            VENUE.AI © 2026 • ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </p>
        </div>
      </motion.div>
    </main>
  );
}
