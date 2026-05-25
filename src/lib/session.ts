import { cookies } from "next/headers";

const COOKIE_NAME = "venueai_admin_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Key derivation from password
async function getKey(password: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const rawKey = enc.encode(password);
  // Hash the password to get a stable 256-bit key
  const hash = await crypto.subtle.digest("SHA-256", rawKey);
  return await crypto.subtle.importKey(
    "raw",
    hash,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encrypt(payload: any, secret: string): Promise<string> {
  const key = await getKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(JSON.stringify(payload));
  
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  
  // Combine IV and Ciphertext into a single array
  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(encrypted), iv.length);
  
  // Convert to base64url
  return btoa(String.fromCharCode(...combined))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function decrypt(token: string, secret: string): Promise<any | null> {
  try {
    const key = await getKey(secret);
    // Decode base64url
    const base64 = token.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const combined = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      combined[i] = binary.charCodeAt(i);
    }
    
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);
    
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      ciphertext
    );
    
    return JSON.parse(new TextDecoder().decode(decrypted));
  } catch (e) {
    return null;
  }
}

export async function getSession(): Promise<any | null> {
  const password = process.env.ADMIN_PASSWORD || "lizalegends228";
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie) return null;
  
  const payload = await decrypt(sessionCookie.value, password);
  if (!payload || Date.now() > payload.expires) {
    return null;
  }
  return payload;
}

export async function setSession(payload: any) {
  const password = process.env.ADMIN_PASSWORD || "lizalegends228";
  const expires = Date.now() + SESSION_DURATION;
  const token = await encrypt({ ...payload, expires }, password);
  
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expires),
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
