import styles from './ProjectCard.module.scss';
import githabIcon from '@/widgets/Footer/assets/github_light.svg';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  imagePath: string;
  name: string;
  description: string;
  stack: string[];
  repoLink: string;
  isCurrent?: boolean;
  onClick: (name: string) => void;
}

const ProjectCard = ({
  isCurrent,
  imagePath,
  repoLink,
  description,
  stack,
  name,
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      onClick={() => onClick(name)}
      className={`${styles.card} ${isCurrent ? styles.current : ''}`}
    >
      <img src={imagePath} alt="project image" />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.stackLine}>
        {stack.map((item, index) => (
          <div key={index} className={styles.stackItem}>
            {item}
          </div>
        ))}
      </div>
      <a href={repoLink} target={'_blank'} className={styles.repoLink}>
        <img src={githabIcon} alt="github icon" />
        <span>Открыть репозиторий</span>
        <ArrowRight />
      </a>
    </div>
  );
};

export default ProjectCard;
