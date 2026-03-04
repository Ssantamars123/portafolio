"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { readonly children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  const [isClient, setIsClient] = useState(false);

  // Get language from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem("language") as Language | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLang(stored);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const value = useMemo(() => ({ lang, setLang: handleSetLang }), [lang]);

  // Prevent hydration mismatch
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return a default value instead of throwing during SSR
    return { lang: "es" as Language, setLang: () => {} };
  }
  return context;
}
