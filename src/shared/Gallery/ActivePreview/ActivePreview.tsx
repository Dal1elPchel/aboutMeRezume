import styles from './ActivePreview.module.scss';

interface ActivePreviewProps {
  photoPath: string;
}

const ActivePreview = ({ photoPath }: ActivePreviewProps) => {
  return <img src={photoPath} alt="My photo" className={styles.preview} />;
};

export default ActivePreview;
