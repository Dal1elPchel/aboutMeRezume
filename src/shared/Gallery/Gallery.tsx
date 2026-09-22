import ActivePreview from '@/shared/Gallery/ActivePreview/ActivePreview.tsx';
import styles from './Gallery.module.scss';
import ThumbnailList from '@/shared/Gallery/ThumbnailList/ThumbnailList.tsx';
import { useState } from 'react';

interface GalleryProps {
  photoPathList: string[];
}

const Gallery = ({ photoPathList }: GalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(photoPathList[0]);

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.introWrapper}>
          <ActivePreview photoPath={currentPhoto} />

          <span className={styles.label}>
            Frontend
            <br />
            Developer
          </span>
          <svg className={styles.arrow} viewBox="0 0 130 220" preserveAspectRatio="none">
            <path
              d="M130 40 C 130 40, 140 70, 100 80"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M100 80 L 107 70 M100 80 L 112 84"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <ThumbnailList
          currentPhoto={currentPhoto}
          photoPathList={photoPathList}
          onClickPhoto={setCurrentPhoto}
        />
      </div>
    </>
  );
};

export default Gallery;
