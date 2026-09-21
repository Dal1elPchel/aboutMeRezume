import styles from './ThemeSwitch.module.scss';
import { useState } from 'react';
import { Moon, LucideSun } from 'lucide-react';

interface ThemeSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ThemeSwitch = ({ checked, onChange }: ThemeSwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const toggleTheme = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <button
      className={styles.switchBtn}
      type={'button'}
      role={'switch'}
      aria-checked={isChecked}
      onClick={toggleTheme}
    >
      <span className={styles.switchBtnInner}>{isChecked ? <LucideSun /> : <Moon />}</span>
    </button>
  );
};

export default ThemeSwitch;
