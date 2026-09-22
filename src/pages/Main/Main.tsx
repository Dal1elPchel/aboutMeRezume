import Intro from '@/widgets/Intro/Intro.tsx';
import Technologies from '@/widgets/Technologies/Technologies.tsx';
import Projects from '@/widgets/Projects/Projects.tsx';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Intro />
      <Technologies />
      <Projects />
    </main>
  );
};

export default Main;
