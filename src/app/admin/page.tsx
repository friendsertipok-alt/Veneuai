"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  TrendingUp, 
  Users, 
  MousePointer, 
  MapPin, 
  LogOut, 
  Database,
  Smartphone,
  Monitor,
  Share2,
  RefreshCw,
  AlertTriangle
} from "lucide-react";

interface Visit {
  id: string;
  created_at: string;
  ip: string;
  user_agent: string;
  path: string;
  referrer: string;
  city: string;
  country: string;
  device: string;
}

interface Click {
  id: string;
  created_at: string;
  ip: string;
  button_id: string;
  page_path: string;
  details?: {
    step?: string;
    option?: string;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<{
    visits: Visit[];
    clicks: Click[];
    mode: "demo" | "production";
  } | null>(null);

  const fetchStats = async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    else setRefreshing(true);
    
    setError("");
    
    try {
      const res = await fetch("/api/admin/stats");
      if (!res.ok) {
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        throw new Error("Не удалось загрузить статистику");
      }
      const statsData = await res.json();
      setData(statsData);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-butter flex flex-col items-center justify-center font-sans p-6 text-navy">
        <div className="animate-spin mb-4 text-rust">
          <RefreshCw size={48} strokeWidth={3} />
        </div>
        <p className="text-sm font-black uppercase tracking-widest">ПОДГОТОВКА СТАТИСТИКИ...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-butter flex flex-col items-center justify-center font-sans p-6 text-navy">
        <div className="bg-white border-2 border-rust editorial-shadow p-8 max-w-md text-center space-y-4">
          <AlertTriangle className="text-rust mx-auto" size={48} />
          <h2 className="text-xl font-black uppercase tracking-tight">Ошибка загрузки данных</h2>
          <p className="text-xs text-navy/70 leading-relaxed font-medium">{error || "Что-то пошло не так при получении данных."}</p>
          <button 
            onClick={() => fetchStats()} 
            className="w-full bg-navy text-butter py-3 font-black text-xs uppercase tracking-widest hover:bg-rust transition-colors"
          >
            ПОПРОБОВАТЬ СНОВА
          </button>
        </div>
      </div>
    );
  }

  const { visits, clicks, mode } = data;

  // 1. Basic Stats Calculation
  const totalPageViews = visits.length;
  const uniqueVisitors = new Set(visits.map(v => v.ip)).size;
  const totalClicks = clicks.length;

  // 2. City Aggregation
  const citiesMap: Record<string, number> = {};
  visits.forEach(v => {
    const city = v.city || "Москва";
    citiesMap[city] = (citiesMap[city] || 0) + 1;
  });
  const sortedCities = Object.entries(citiesMap)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / totalPageViews) * 100)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // 3. Referrer Aggregation
  const referrersMap: Record<string, number> = {};
  visits.forEach(v => {
    const ref = v.referrer || "direct";
    let cleanedRef = ref;
    if (ref.includes("google")) cleanedRef = "google.com";
    else if (ref.includes("yandex")) cleanedRef = "yandex.ru";
    else if (ref.includes("localhost") || ref.includes("127.0.0.1")) cleanedRef = "local";
    referrersMap[cleanedRef] = (referrersMap[cleanedRef] || 0) + 1;
  });
  const sortedReferrers = Object.entries(referrersMap)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / totalPageViews) * 100)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // 4. Devices Aggregation
  let desktopCount = 0;
  let mobileCount = 0;
  visits.forEach(v => {
    if (v.device === "Mobile") mobileCount++;
    else desktopCount++;
  });
  const desktopPercent = totalPageViews ? Math.round((desktopCount / totalPageViews) * 100) : 50;
  const mobilePercent = totalPageViews ? Math.round((mobileCount / totalPageViews) * 100) : 50;

  // 5. Quiz Answers Aggregation (С кем, Настроение, Бюджет)
  const quizStats: Record<string, Record<string, number>> = {
    withWhom: { date: 0, friends: 0, alone: 0, family: 0 },
    mood: { chill: 0, active: 0, romance: 0, aesthetics: 0 },
    budget: { free: 0, low: 0, mid: 0, high: 0 }
  };

  clicks.forEach(c => {
    if (c.details && c.details.step && c.details.option) {
      const step = c.details.step;
      const opt = c.details.option;
      if (quizStats[step] && quizStats[step][opt] !== undefined) {
        quizStats[step][opt]++;
      }
    }
  });

  const quizOptionLabels: Record<string, string> = {
    date: "Свидание ❤️",
    friends: "Друзья 🙌",
    alone: "В одиночку 🧘",
    family: "Семья 🏠",
    chill: "Чилл 🌊",
    active: "Активность ⚡",
    romance: "Романтика 🕯️",
    aesthetics: "Эстетика 🎨",
    free: "Бесплатно 🎁",
    low: "До 1500 ₽ 🪙",
    mid: "1500–3000 ₽ 💸",
    high: "От 3000 ₽ 💎"
  };

  return (
    <main className="min-h-screen bg-butter p-6 md:p-10 text-navy font-sans selection:bg-navy selection:text-butter">
      
      {/* Dynamic Header */}
      <header className="border-b-4 border-navy pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-rust font-black tracking-[0.3em] text-[10px] uppercase mb-1 block">
            СЛУЖЕБНЫЙ РАЗДЕЛ • ВЫПУСК №01
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            РЕДАКЦИОННАЯ <span className="text-rust italic">СТАТИСТИКА</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button 
            onClick={() => fetchStats(true)}
            disabled={refreshing}
            className="flex items-center gap-2 border-2 border-navy bg-white px-4 py-3 text-xs font-black uppercase tracking-wider editorial-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
            {refreshing ? "ОБНОВЛЕНИЕ..." : "ОБНОВИТЬ"}
          </button>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-rust text-butter px-4 py-3 text-xs font-black uppercase tracking-wider editorial-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95"
          >
            <LogOut size={14} /> ВЫХОД
          </button>
        </div>
      </header>

      {/* Production vs Demo Alert Bar */}
      {mode === "demo" && (
        <div className="mb-8 bg-white border-2 border-rust editorial-shadow p-6 space-y-4">
          <div className="flex items-center gap-3 text-rust">
            <AlertTriangle size={24} strokeWidth={3} />
            <h3 className="font-black text-sm uppercase tracking-wide">Включен тестовый демо-режим</h3>
          </div>
          <p className="text-xs text-navy/80 leading-relaxed font-medium">
            Сайт запущен в ознакомительном режиме. Данные о кликах и посещениях сохраняются во временной памяти сервера и сбросятся при перезапуске. Чтобы подключить постоянную базу данных, добавьте в настройки Netlify две переменные окружения:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-butter/50 p-4 border border-navy/20 font-mono text-[10px] space-y-1 overflow-x-auto text-navy/70 select-all">
              <strong>URL базы данных (Supabase API):</strong>
              <div>NEXT_PUBLIC_SUPABASE_URL = https://your-id.supabase.co</div>
            </div>
            <div className="bg-butter/50 p-4 border border-navy/20 font-mono text-[10px] space-y-1 overflow-x-auto text-navy/70 select-all">
              <strong>Анонимный ключ API (Supabase Anon Key):</strong>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Stats Counters Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        
        {/* Card 1: Page Views */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black tracking-widest text-rust uppercase">ПРОСМОТРЫ</span>
            <TrendingUp size={20} className="text-navy/50" />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-navy">{totalPageViews}</h2>
            <p className="text-[10px] font-bold text-navy/60 uppercase mt-1">Всего просмотров страниц</p>
          </div>
        </div>

        {/* Card 2: Unique Visitors */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black tracking-widest text-rust uppercase">ПОСЕТИТЕЛИ</span>
            <Users size={20} className="text-navy/50" />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-navy">{uniqueVisitors}</h2>
            <p className="text-[10px] font-bold text-navy/60 uppercase mt-1">Уникальных IP-адресов</p>
          </div>
        </div>

        {/* Card 3: Button Clicks */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black tracking-widest text-rust uppercase">КЛИКИ ПО КНОПКАМ</span>
            <MousePointer size={20} className="text-navy/50" />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-navy">{totalClicks}</h2>
            <p className="text-[10px] font-bold text-navy/60 uppercase mt-1">Всего нажатий интерактивных элементов</p>
          </div>
        </div>

        {/* Card 4: DB Mode */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black tracking-widest text-rust uppercase">РЕЖИМ БАЗЫ</span>
            <Database size={20} className="text-navy/50" />
          </div>
          <div>
            <h2 className={`text-2xl lg:text-3xl font-black tracking-tighter uppercase ${mode === 'production' ? 'text-navy' : 'text-rust'}`}>
              {mode === "production" ? "SUPABASE" : "ДЕМО-ПЕОЧНИЦА"}
            </h2>
            <p className="text-[10px] font-bold text-navy/60 uppercase mt-1">Провайдер хранения данных</p>
          </div>
        </div>
      </section>

      {/* Main Charts Dashboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Column 1: Cities & Referrers */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 space-y-8">
          
          {/* Cities Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-navy/20 pb-2">
              <MapPin size={16} className="text-rust" />
              <h3 className="font-black text-sm uppercase tracking-wide">ПОПУЛЯРНЫЕ ГОРОДА</h3>
            </div>
            {sortedCities.length > 0 ? (
              <div className="space-y-4">
                {sortedCities.map(c => (
                  <div key={c.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tight text-navy">
                      <span>{c.name}</span>
                      <span>{c.count} ({c.percentage}%)</span>
                    </div>
                    <div className="w-full h-4 bg-butter border border-navy">
                      <div className="h-full bg-rust border-r border-navy" style={{ width: `${c.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-navy/50 font-bold uppercase py-4">Нет данных о гео-позициях</p>
            )}
          </div>

          {/* Referrers Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-navy/20 pb-2">
              <Share2 size={16} className="text-rust" />
              <h3 className="font-black text-sm uppercase tracking-wide">ИСТОЧНИКИ ПЕРЕХОДОВ</h3>
            </div>
            {sortedReferrers.length > 0 ? (
              <div className="space-y-4">
                {sortedReferrers.map(r => (
                  <div key={r.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tight text-navy">
                      <span className="truncate max-w-[150px]">{r.name}</span>
                      <span>{r.count} ({r.percentage}%)</span>
                    </div>
                    <div className="w-full h-4 bg-butter border border-navy">
                      <div className="h-full bg-navy border-r border-navy" style={{ width: `${r.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-navy/50 font-bold uppercase py-4">Нет данных о переходах</p>
            )}
          </div>
        </div>

        {/* Column 2: Quiz Stats Analysis */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 lg:col-span-2 space-y-8">
          
          <div className="flex items-center gap-2 border-b border-navy/20 pb-2">
            <TrendingUp size={16} className="text-rust" />
            <h3 className="font-black text-sm uppercase tracking-wide">АНАЛИЗ ОТВЕТОВ В ОПРОСЕ (ЗАПРОСЫ ПОЛЬЗОВАТЕЛЕЙ)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category: With Whom */}
            <div className="space-y-4">
              <h4 className="font-black text-xs text-rust uppercase border-b border-navy/10 pb-1">1. С КЕМ ИДУТ?</h4>
              <div className="space-y-3">
                {Object.entries(quizStats.withWhom).map(([option, count]) => {
                  const total = Object.values(quizStats.withWhom).reduce((a, b) => a + b, 0) || 1;
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={option} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-black uppercase text-navy">
                        <span>{quizOptionLabels[option]}</span>
                        <span>{count}</span>
                      </div>
                      <div className="w-full h-3 bg-butter border border-navy">
                        <div className="h-full bg-navy" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category: Mood */}
            <div className="space-y-4">
              <h4 className="font-black text-xs text-rust uppercase border-b border-navy/10 pb-1">2. НАСТРОЕНИЕ</h4>
              <div className="space-y-3">
                {Object.entries(quizStats.mood).map(([option, count]) => {
                  const total = Object.values(quizStats.mood).reduce((a, b) => a + b, 0) || 1;
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={option} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-black uppercase text-navy">
                        <span>{quizOptionLabels[option]}</span>
                        <span>{count}</span>
                      </div>
                      <div className="w-full h-3 bg-butter border border-navy">
                        <div className="h-full bg-rust" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category: Budget */}
            <div className="space-y-4">
              <h4 className="font-black text-xs text-rust uppercase border-b border-navy/10 pb-1">3. БЮДЖЕТ</h4>
              <div className="space-y-3">
                {Object.entries(quizStats.budget).map(([option, count]) => {
                  const total = Object.values(quizStats.budget).reduce((a, b) => a + b, 0) || 1;
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={option} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-black uppercase text-navy">
                        <span>{quizOptionLabels[option]}</span>
                        <span>{count}</span>
                      </div>
                      <div className="w-full h-3 bg-butter border border-navy">
                        <div className="h-full bg-navy/60" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Devices info bar */}
          <div className="border-t border-navy/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-wide text-navy">УСТРОЙСТВА:</span>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-navy/70">
                <Monitor size={14} /> Desktop: {desktopPercent}%
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-navy/70">
                <Smartphone size={14} /> Mobile: {mobilePercent}%
              </div>
            </div>
            <div className="w-full md:w-64 h-3 bg-butter border border-navy flex overflow-hidden">
              <div className="bg-navy h-full" style={{ width: `${desktopPercent}%` }} />
              <div className="bg-rust h-full" style={{ width: `${mobilePercent}%` }} />
            </div>
          </div>

        </div>
      </section>

      {/* Tables Section: Feed of Recent Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Table 1: Recent Visits */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-navy/20 pb-2">
            <Users size={16} className="text-rust" />
            <h3 className="font-black text-sm uppercase tracking-wide">ПОСЛЕДНИЕ ПОСЕЩЕНИЯ</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-navy font-black uppercase tracking-wider text-navy/60">
                  <th className="pb-2">Время</th>
                  <th className="pb-2">IP-Адрес</th>
                  <th className="pb-2">Город</th>
                  <th className="pb-2">Устр.</th>
                  <th className="pb-2">Путь</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5 font-medium text-navy/80">
                {visits.slice(0, 10).map((v) => {
                  const dateStr = new Date(v.created_at).toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit"
                  });
                  return (
                    <tr key={v.id} className="hover:bg-butter/20">
                      <td className="py-2.5 whitespace-nowrap">{dateStr}</td>
                      <td className="py-2.5 font-mono text-[10px]">{v.ip}</td>
                      <td className="py-2.5">{v.city || "Москва"}</td>
                      <td className="py-2.5 flex items-center gap-1 mt-1">
                        {v.device === "Mobile" ? <Smartphone size={12} /> : <Monitor size={12} />}
                        <span className="text-[10px] uppercase font-bold">{v.device}</span>
                      </td>
                      <td className="py-2.5 font-mono text-[10px] text-rust">{v.path}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Recent Clicks */}
        <div className="bg-white border-2 border-navy editorial-shadow p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-navy/20 pb-2">
            <MousePointer size={16} className="text-rust" />
            <h3 className="font-black text-sm uppercase tracking-wide">ПОСЛЕДНИЕ СОБЫТИЯ КЛИКОВ</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-navy font-black uppercase tracking-wider text-navy/60">
                  <th className="pb-2">Время</th>
                  <th className="pb-2">IP-Адрес</th>
                  <th className="pb-2">Действие / Кнопка</th>
                  <th className="pb-2 text-right">Детали</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5 font-medium text-navy/80">
                {clicks.slice(0, 10).map((c) => {
                  const dateStr = new Date(c.created_at).toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit"
                  });
                  return (
                    <tr key={c.id} className="hover:bg-butter/20">
                      <td className="py-2.5 whitespace-nowrap">{dateStr}</td>
                      <td className="py-2.5 font-mono text-[10px]">{c.ip}</td>
                      <td className="py-2.5">
                        <span className="bg-navy text-butter px-2 py-0.5 text-[10px] font-black uppercase">
                          {c.button_id}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-mono text-[10px] text-rust">
                        {c.details?.option ? quizOptionLabels[c.details.option] || c.details.option : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Footer copyright */}
      <footer className="mt-12 border-t border-navy/10 pt-6 text-center">
        <p className="text-[10px] text-navy/40 font-bold uppercase tracking-widest">
          VENUE.AI • ПАНЕЛЬ УПРАВЛЕНИЯ ВЕРСИЯ 1.0.0
        </p>
      </footer>

    </main>
  );
}
