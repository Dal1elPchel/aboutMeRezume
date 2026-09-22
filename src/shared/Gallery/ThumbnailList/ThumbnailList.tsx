import styles from './ThumbnailList.module.scss';

interface ThumbnailListProps {
  currentPhoto: string;
  photoPathList: string[];
  onClickPhoto: (photoPath: string) => void;
}

const ThumbnailList = ({ currentPhoto, photoPathList, onClickPhoto }: ThumbnailListProps) => {
  return (
    <ul className={styles.manager}>
      {photoPathList.map((photoPath) => (
        <li key={photoPath} onClick={() => onClickPhoto(photoPath)}>
          <img
            src={photoPath}
            alt="my photo"
            className={`${styles.itemPhoto} ${currentPhoto === photoPath ? styles.current : ''}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ThumbnailList;
