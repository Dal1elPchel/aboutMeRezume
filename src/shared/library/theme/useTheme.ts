import type { themeType } from '@/shared/library/theme/setTheme.ts';
import { createContext, useContext } from 'react';

interface ThemeContextProp {
  theme: themeType;
  setTheme: (theme: themeType) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProp | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw Error('useTheme может использоваться только внутри провайдера');
  }
  return ctx;
};
