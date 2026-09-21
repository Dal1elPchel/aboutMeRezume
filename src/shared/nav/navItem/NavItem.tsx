import styles from './navItem.module.scss';

interface ItemProps {
  text: string;
  action: () => void;
  isCurrent?: boolean;
}

const NavItem = ({ text, action, isCurrent }: ItemProps) => {
  return (
    <>
      <li className={isCurrent ? `${styles.current} ${styles.item}` : `${styles.item}`}>
        <a href="#" onClick={action}>
          {text}
        </a>
      </li>
    </>
  );
};

export default NavItem;
