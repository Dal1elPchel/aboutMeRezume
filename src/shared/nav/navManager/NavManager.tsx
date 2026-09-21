import styles from './NavManager.module.scss';
import NavItem from '@/shared/nav/navItem/NavItem.tsx';
import { useState } from 'react';

interface ManagerProps {
  items: string[];
}

const NavManager = ({ items }: ManagerProps) => {
  const [currentItem, setCurrentItem] = useState<string>(items[0]);

  return (
    <ul className={styles.manager}>
      {items.map((item) => (
        <NavItem
          key={item}
          text={item}
          action={() => setCurrentItem(item)}
          isCurrent={currentItem === item}
        />
      ))}
    </ul>
  );
};

export default NavManager;
