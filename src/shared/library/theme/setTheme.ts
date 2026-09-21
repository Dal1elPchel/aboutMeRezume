export type themeType = 'light' | 'dark';

const isTheme = (theme: string | null): theme is themeType => {
  return theme === 'light' || theme === 'dark';
};

export const applyTheme = (theme: themeType) => {
  document.documentElement.setAttribute('data-theme', theme);
  console.log('applied');
};

export const initialTheme = (): themeType => {
  const chosenTheme = localStorage.getItem('theme');

  if (isTheme(chosenTheme)) {
    applyTheme(chosenTheme);
    return chosenTheme;
  }
  applyTheme('dark');
  return 'dark';
};
