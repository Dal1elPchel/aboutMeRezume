import AboutMe from '@/widgets/Technologies/AboutMe/AboutMe.tsx';
import MyStack from '@/widgets/Technologies/MyStack/MyStack.tsx';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <section id={'skills'} className={styles.section}>
      <div className={'container'}>
        <AboutMe />
      </div>

      <div className={styles.HorizontalLine}></div>
      <div className={'container'}>
        <MyStack />
      </div>
    </section>
  );
};

export default Technologies;
