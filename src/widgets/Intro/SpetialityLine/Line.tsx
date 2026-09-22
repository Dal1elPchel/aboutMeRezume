import styles from './Line.module.scss';
import { CodeXml, CoffeeIcon, Zap } from 'lucide-react';

const Line = () => {
  return (
    <div className={styles.mainLine}>
      <div className={styles.lineElement}>
        <div className={styles.icon}>
          <CodeXml />
        </div>
        <div>
          <h6 className={styles.title}>React</h6>
          <p className={styles.subtitle}>Любимый стек</p>
        </div>
      </div>

      <div className={styles.lineElement}>
        <div className={styles.icon}>
          <CoffeeIcon />
        </div>
        <div>
          <h6 className={styles.title}>Саморазвитие</h6>
          <p className={styles.subtitle}>Мой движок</p>
        </div>
      </div>

      <div className={styles.lineElement}>
        <div className={styles.icon}>
          <Zap />
        </div>
        <div>
          <h6 className={styles.title}>FSD + TS</h6>
          <p className={styles.subtitle}>Мой подход</p>
        </div>
      </div>
    </div>
  );
};

export default Line;
