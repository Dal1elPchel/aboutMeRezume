import * as React from 'react';
import { useEffect, useState } from 'react';
import { applyTheme, initialTheme, type themeType } from '@/shared/library/theme/setTheme.ts';
import { ThemeContext } from '@/shared/library/theme/useTheme.ts';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<themeType>(initialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
