export interface Visit {
  id?: string;
  created_at?: string;
  ip: string;
  user_agent: string;
  path: string;
  referrer: string;
  city: string;
  country: string;
  device: string;
}

export interface Click {
  id?: string;
  created_at?: string;
  ip: string;
  button_id: string;
  page_path: string;
  details?: any;
}

// In-memory fallback database for local testing
let localVisits: Visit[] = [];
let localClicks: Click[] = [];

// To persist in-memory across Next.js hot-reloads
if (process.env.NODE_ENV !== "production") {
  if (!(global as any).localVisits) {
    (global as any).localVisits = [];
    (global as any).localClicks = [];
  }
  localVisits = (global as any).localVisits;
  localClicks = (global as any).localClicks;
}

function getSupabaseCredentials() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  return url && key ? { url, key } : null;
}

export async function saveVisit(visit: Omit<Visit, "created_at" | "id">) {
  const creds = getSupabaseCredentials();
  if (creds) {
    try {
      const res = await fetch(`${creds.url}/rest/v1/visits`, {
        method: "POST",
        headers: {
          "apikey": creds.key,
          "Authorization": `Bearer ${creds.key}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(visit)
      });
      if (!res.ok) {
        console.error("Failed to save visit to Supabase:", await res.text());
      }
    } catch (e) {
      console.error("Supabase connection error:", e);
    }
  } else {
    const newVisit = {
      ...visit,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString()
    };
    localVisits.push(newVisit);
    // Keep local visits capped at 500 in memory
    if (localVisits.length > 500) {
      localVisits.shift();
    }
  }
}

export async function saveClick(click: Omit<Click, "created_at" | "id">) {
  const creds = getSupabaseCredentials();
  if (creds) {
    try {
      const res = await fetch(`${creds.url}/rest/v1/clicks`, {
        method: "POST",
        headers: {
          "apikey": creds.key,
          "Authorization": `Bearer ${creds.key}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(click)
      });
      if (!res.ok) {
        console.error("Failed to save click to Supabase:", await res.text());
      }
    } catch (e) {
      console.error("Supabase connection error:", e);
    }
  } else {
    const newClick = {
      ...click,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString()
    };
    localClicks.push(newClick);
    if (localClicks.length > 500) {
      localClicks.shift();
    }
  }
}

export async function getStats() {
  const creds = getSupabaseCredentials();
  if (creds) {
    try {
      // 1. Fetch visits from Supabase (limit 500 for stats)
      const visitsRes = await fetch(`${creds.url}/rest/v1/visits?order=created_at.desc&limit=500`, {
        method: "GET",
        headers: {
          "apikey": creds.key,
          "Authorization": `Bearer ${creds.key}`,
          "Content-Type": "application/json"
        }
      });
      
      // 2. Fetch clicks from Supabase (limit 500)
      const clicksRes = await fetch(`${creds.url}/rest/v1/clicks?order=created_at.desc&limit=500`, {
        method: "GET",
        headers: {
          "apikey": creds.key,
          "Authorization": `Bearer ${creds.key}`,
          "Content-Type": "application/json"
        }
      });
      
      if (visitsRes.ok && clicksRes.ok) {
        const visits = await visitsRes.json();
        const clicks = await clicksRes.json();
        return { visits, clicks, mode: "production" };
      } else {
        console.error("Failed to fetch stats from Supabase:", await visitsRes.text(), await clicksRes.text());
      }
    } catch (e) {
      console.error("Supabase stats fetch error:", e);
    }
  }
  
  // Return local mock data if no database
  const sortedVisits = [...localVisits].sort((a, b) => new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime());
  const sortedClicks = [...localClicks].sort((a, b) => new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime());
  
  // If local list is completely empty, let's inject a few realistic mock rows so they don't see a blank page initially
  if (sortedVisits.length === 0) {
    const mockVisits = [
      { id: "1", created_at: new Date(Date.now() - 50000).toISOString(), ip: "188.244.33.12", user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", path: "/", referrer: "direct", city: "Moscow", country: "RU", device: "Desktop" },
      { id: "2", created_at: new Date(Date.now() - 300000).toISOString(), ip: "85.140.72.105", user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15", path: "/results", referrer: "yandex.ru", city: "Saint Petersburg", country: "RU", device: "Mobile" },
      { id: "3", created_at: new Date(Date.now() - 600000).toISOString(), ip: "46.242.14.88", user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15", path: "/", referrer: "google.com", city: "Moscow", country: "RU", device: "Desktop" }
    ];
    const mockClicks = [
      { id: "1", created_at: new Date(Date.now() - 40000).toISOString(), ip: "188.244.33.12", button_id: "СОЗДАТЬ МАРШРУТ", page_path: "/" },
      { id: "2", created_at: new Date(Date.now() - 250000).toISOString(), ip: "85.140.72.105", button_id: "СВИДАНИЕ", page_path: "/", details: { step: "withWhom", option: "date" } },
      { id: "3", created_at: new Date(Date.now() - 230000).toISOString(), ip: "85.140.72.105", button_id: "РОМАНТИКА", page_path: "/", details: { step: "mood", option: "romance" } }
    ];
    return { visits: mockVisits, clicks: mockClicks, mode: "demo" };
  }

  return { visits: sortedVisits, clicks: sortedClicks, mode: "demo" };
}
