import styles from './Footer.module.scss';
import githabIcon from './assets/github_light.svg';
import { MailIcon, Send, ArrowRightIcon } from 'lucide-react';
import Button from '@/shared/button/Button.tsx';

const Footer = () => {
  return (
    <footer id={'contacts'} className={'container'}>
      <div className={styles.primaryInfo}>
        <div className={styles.textInfo}>
          <h4>Давайте работать вместе</h4>
          <p>
            У меня есть желание делать полезные продукты и развиваться. Если у вас будут интересные
            проекты или предложения - буду рад обсудить!
          </p>
        </div>
        <div className={styles.links}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=danielpchelincev123@gmail.com&su=Тема&body=Текст"
            target="_blank"
            className={styles.linkItem}
          >
            <MailIcon />
            danielpchelincev123@gmail.com
          </a>
          <a href="https://t.me/the_most_bee_bee" target="_blank" className={styles.linkItem}>
            <Send />
            @the_most_bee_bee
          </a>
          <a href="https://github.com/Dal1elPchel" target="_blank" className={styles.linkItem}>
            <img src={githabIcon} alt="github icon" />
            github.com/Dal1elPchel
          </a>
        </div>
        <Button
          icon={<ArrowRightIcon />}
          text={'Написать мне (ВК)'}
          onClick={() => (window.location.href = 'https://vk.ru/un_connaisseur_du_beau')}
          isActive={true}
        />
      </div>
      <div className={styles.secondaryInfo}>
        <p>&#169; 2026 Даниил Пчелинцев</p>
        <p>Frontend Developer / React / TypeScript / FSD</p>
      </div>
    </footer>
  );
};

export default Footer;
