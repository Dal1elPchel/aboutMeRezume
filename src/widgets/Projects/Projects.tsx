import Slider from '@/shared/slider/Slider.tsx';
import ProjectCard from '@/entities/projectCard/UI/ProjectCard.tsx';
import cinemaIntro from '@/widgets/Projects/assets/cinema.png';
import feqtureFlags from '@/widgets/Projects/assets/featureFlags.png';
import foodOpt from '@/widgets/Projects/assets/foodOptimizer.png';
import lightbox from '@/widgets/Projects/assets/lightbox.png';
import styles from './Projects.module.scss';

interface ProjectData {
  imagePath: string;
  name: string;
  description: string;
  stack: string[];
  repoLink: string;
}

const projects: ProjectData[] = [
  {
    imagePath: foodOpt,
    name: 'FoodOptimizer',
    description: 'Сервис для подбора блюд и заказов в ресторанах на основе ваших предпочтений.',
    stack: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'SCSS'],
    repoLink: 'https://github.com/Dal1elPchel/food-optimizer-frontend-deploy.git',
  },
  {
    imagePath: feqtureFlags,
    name: 'Feature Flags',
    description:
      'Приложение для управления feature flags с возможностью создания, редактирования и фильтрации.',
    stack: ['React', 'TypeScript', 'MobX', 'SCSS'],
    repoLink: 'https://github.com/Dal1elPchel/Feature-Flags-SmartWay-Best-Company-200.git',
  },
  {
    imagePath: cinemaIntro,
    name: 'Cinema',
    description: 'Сайт для заказа билетов и просмотра новостей для кинотеатра.',
    stack: ['React', 'React Router', 'SCSS', 'Vite'],
    repoLink: 'https://github.com/Dal1elPchel/Cinema.git',
  },
  {
    imagePath: lightbox,
    name: 'Lightbox Gallery',
    description: 'Простой веб интерфейс для работы с галереей фотографий',
    stack: ['Native JS'],
    repoLink: 'https://github.com/Dal1elPchel/tests.git',
  },
];

const Projects = () => {
  const items = projects.map((project) => (
    <ProjectCard
      key={project.name}
      imagePath={project.imagePath}
      name={project.name}
      description={project.description}
      stack={project.stack}
      repoLink={project.repoLink}
      onClick={() => {}}
    />
  ));

  return (
    <div id="projects" className={styles.projects}>
      <Slider title="Мои проекты" items={items} />
    </div>
  );
};

export default Projects;
