import styles from './MyStack.module.scss';
import Button from '@/shared/button/Button.tsx';
import reactIcon from '@/widgets/Technologies/MyStack/assets/react_light.svg';
import typescriptIcon from '@/widgets/Technologies/MyStack/assets/typescript.svg';
import dockerIcon from '@/widgets/Technologies/MyStack/assets/docker.svg';
import eslintIcon from '@/widgets/Technologies/MyStack/assets/eslint-icon-light.svg';
import gitIcon from '@/widgets/Technologies/MyStack/assets/git.svg';
import prettierIcon from '@/widgets/Technologies/MyStack/assets/prettier-icon-light.svg';
import sassIcon from '@/widgets/Technologies/MyStack/assets/sass.svg';
import tanstackIcon from '@/widgets/Technologies/MyStack/assets/tanstack_light.svg';
import viteIcon from '@/widgets/Technologies/MyStack/assets/vite.svg';
import mobxIcon from '@/widgets/Technologies/MyStack/assets/mobx.svg';
import zustandIcon from '@/widgets/Technologies/MyStack/assets/zustand-original.svg';

const MyStack = () => {
  return (
    <section className={styles.section}>
      <h3>Технологии и инструменты</h3>
      <div className={styles.stackManager}>
        <Button icon={<img src={reactIcon} alt="icon" />} text={'React'} />
        <Button icon={<img src={typescriptIcon} alt="icon" />} text={'TypeScript'} />
        <Button icon={<img src={viteIcon} alt="icon" />} text={'Vite'} />
        <Button icon={<img src={tanstackIcon} alt="icon" />} text={'Tanstack'} />
        <Button icon={<img src={sassIcon} alt="icon" />} text={'Sass'} />
        <Button icon={<img src={prettierIcon} alt="icon" />} text={'Prettier'} />
        <Button icon={<img src={gitIcon} alt="icon" />} text={'Git'} />
        <Button icon={<img src={eslintIcon} alt="icon" />} text={'Eslint'} />
        <Button icon={<img src={dockerIcon} alt="icon" />} text={'Docker'} />
        <Button icon={<img src={mobxIcon} alt="icon" />} text={'MobX'} />
        <Button icon={<img src={zustandIcon} alt="icon" />} text={'Zustand'} />
      </div>
    </section>
  );
};

export default MyStack;
