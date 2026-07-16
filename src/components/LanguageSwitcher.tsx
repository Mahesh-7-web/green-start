"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage, languageNames, type Language } from "./LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        id="language-switcher-btn"
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-800 hover:bg-green-100 transition-colors"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5 text-green-600" />
        <span>{languageNames[language]}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 text-green-500 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 z-50 min-w-[150px] rounded-xl border border-green-100 bg-white shadow-lg overflow-hidden animate-fadeIn">
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors text-left",
                lang === language
                  ? "bg-green-50 text-green-800 font-medium"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-800"
              )}
            >
              {lang === language && (
                <span className="h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
              )}
              {lang !== language && (
                <span className="h-1.5 w-1.5 rounded-full bg-transparent flex-shrink-0" />
              )}
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
