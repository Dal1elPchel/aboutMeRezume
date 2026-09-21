import styles from './Header.module.scss';
import NavManager from '@/shared/nav/navManager/NavManager.tsx';
import { CodeXml, GitFork } from 'lucide-react';
import ThemeSwitch from '@/shared/themSwitch/ThemeSwitch.tsx';
import { useTheme } from '@/shared/library/theme/useTheme.ts';

const Header = () => {
  const items = ['Обо мне', 'Проекты', 'Навыки', 'Контакты'];
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <CodeXml />
          <h4>Даниил Пчелинцев</h4>
        </div>

        <NavManager items={items} />

        <div className={styles.btnManager}>
          <ThemeSwitch checked={theme !== 'dark'} onChange={toggleTheme} />
          <a
            href="https://github.com/Dal1elPchel/aboutMeRezume.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitFork /> aboutMe repo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
