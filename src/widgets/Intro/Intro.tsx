import Gallery from '@/shared/Gallery/Gallery.tsx';
import photo1 from '@/widgets/Intro/assets/1.png';
import photo2 from '@/widgets/Intro/assets/2.png';
import photo3 from '@/widgets/Intro/assets/3.png';
import Line from '@/widgets/Intro/SpetialityLine/Line.tsx';
import styles from './Intro.module.scss';
import Button from '@/shared/button/Button.tsx';
import { Mail, DownloadIcon } from 'lucide-react';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.mainInfo}>
          <h5>Frontend Developer</h5>
          <h2>
            Привет, я <span>Даниил</span>
          </h2>
          <p className={styles.subtitle}>
            Разрабатываю современные веб-приложения <br />с удобным интерфеймос и чистым кодом.
          </p>
          <Line />
          <div className={styles.btnManager}>
            <Button text={'Написать мне'} icon={<Mail />} isActive={true} />
            <Button text={'Скачать резюме'} icon={<DownloadIcon />} isActive={false} />
          </div>
        </div>
        <Gallery photoPathList={[photo1, photo2, photo3]} />
      </div>
    </div>
  );
};

export default Intro;
