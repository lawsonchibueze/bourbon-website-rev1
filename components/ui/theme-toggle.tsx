"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const storageKey = "bourbon-theme";

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function handlePreferenceChange(event: MediaQueryListEvent) {
    if (window.localStorage.getItem(storageKey)) return;
    applyTheme(event.matches ? "dark" : "light");
    callback();
  }

  function handleStorage(event: StorageEvent) {
    if (event.key !== storageKey) return;
    const nextTheme =
      event.newValue === "dark" || event.newValue === "light"
        ? event.newValue
        : media.matches
          ? "dark"
          : "light";
    applyTheme(nextTheme);
    callback();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener("bourbon-theme-change", callback);
  media.addEventListener("change", handlePreferenceChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("bourbon-theme-change", callback);
    media.removeEventListener("change", handlePreferenceChange);
  };
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  function toggleTheme() {
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event("bourbon-theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={cn(
        "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-sm border border-outline-variant bg-surface-bright text-on-surface transition-colors hover:border-primary hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bright",
        className,
      )}
    >
      <Sun
        aria-hidden
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          isDark ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute h-[17px] w-[17px] transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0",
        )}
      />
    </button>
  );
}
