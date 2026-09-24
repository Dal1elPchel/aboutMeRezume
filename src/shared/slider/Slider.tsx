import styles from './Slider.module.scss';
import * as React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '@/shared/button/Button.tsx';
import { useRef } from 'react';

interface SliderProps {
  title: string;
  items: React.ReactNode[];
}

const Slider = ({ title, items }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const container = sliderRef.current;
    if (!container) return;

    // ширина одной карточки = ширина первого дочернего div внутри sliderInner
    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;

    const gap = parseFloat(getComputedStyle(container).gap || '0');
    const scrollAmount = card.offsetWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const isAtEnd = container.scrollLeft >= maxScroll - 1;
    const isAtStart = container.scrollLeft <= 0;

    if (direction === 'right' && isAtEnd) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction === 'left' && isAtStart) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      return;
    }

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };
  return (
    <div className={styles.sliderOuter}>
      <div className={`container ${styles.titleContainer}`}>
        <div className={styles.titleInfo}>
          <h3>{title}</h3>
          <div className={styles.hint}>
            <ArrowLeft />
            <ArrowRight />
            <span>Листайте проекты вручную</span>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Button icon={<ArrowLeft />} text={''} onClick={() => scrollByCard('left')} />
        <div className={styles.sliderInner} ref={sliderRef}>
          {items.map((Item, index) => (
            <div key={index}>{Item}</div>
          ))}
        </div>
        <Button icon={<ArrowRight />} text={''} onClick={() => scrollByCard('right')} />
      </div>
    </div>
  );
};

export default Slider;
