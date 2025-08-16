import { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    return saved || 'light'; // default light
  });

  const [isDark, setIsDark] = useState(() => {
    if (mode === 'dark') return true;
    if (mode === 'light') return false;
    // system
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const applyTheme = (mode: ThemeMode) => {
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else if (mode === 'light') {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      } else {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemDark) {
          document.documentElement.classList.add('dark');
          setIsDark(true);
        } else {
          document.documentElement.classList.remove('dark');
          setIsDark(false);
        }
      }
    };

    applyTheme(mode);
    localStorage.setItem('theme', mode);

    if (mode === 'system') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);

      mql.addEventListener('change', listener);
      return () => {
        mql.removeEventListener('change', listener);
      };
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const toggleTheme = () => {
    if (mode === 'dark') setMode('light');
    else setMode('dark');
  };

  return (
    <ThemeContext.Provider value={{ mode, isDark, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
