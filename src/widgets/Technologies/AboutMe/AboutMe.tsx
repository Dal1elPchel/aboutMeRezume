import styles from './AboutMe.module.scss';
import { UserRoundIcon, MapPinIcon, LucideGraduationCap, Check } from 'lucide-react';
const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <article className={styles.partSection}>
        <h3>Обо мне</h3>
        <p>
          Я - фронтенд разработчик, который любит создавать удобные и красивые интерфейсы. Мне
          нравится, когда код не только работает, но и легко поддерживается. Я постоянно учусь,
          слежу за новыми технологиями истремлюсь делать продукт лучше.
        </p>

        <div className={styles.tags}>
          <div className={styles.tagItem}>
            <UserRoundIcon />
            <span>20 лет</span>
          </div>

          <div className={styles.tagItem}>
            <MapPinIcon />
            <span>Россия</span>
          </div>

          <div className={styles.tagItem}>
            <LucideGraduationCap />
            <span>Самоучка</span>
          </div>
        </div>
      </article>
      <div className={styles.line}></div>
      <article className={styles.partSection}>
        <h3>Чем я занимаюсь</h3>
        <ul>
          <li>
            <Check />
            Разрабатываю веб сайты на React (Vite)
          </li>
          <li>
            <Check />
            Использую менеджеры состояний (MobX, Zustand, TanStack)
          </li>
          <li>
            <Check />
            Строю архитектуру по FSD
          </li>
          <li>
            <Check />
            Пишу чистый, понятный и масштабируемый код
          </li>
          <li>
            <Check />
            Участвую в разработке реального проекта, решаю практические задачи
          </li>
        </ul>
      </article>
    </section>
  );
};

export default AboutMe;
