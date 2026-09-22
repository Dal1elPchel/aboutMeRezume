import styles from './navItem.module.scss';

interface ItemProps {
  text: string;
  href: string;
  action: () => void;
  isCurrent?: boolean;
}

const NavItem = ({ text, href, action, isCurrent }: ItemProps) => {
  return (
    <>
      <li className={isCurrent ? `${styles.current} ${styles.item}` : `${styles.item}`}>
        <a href={`#${href}`} onClick={action}>
          {text}
        </a>
      </li>
    </>
  );
};

export default NavItem;
