import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import styles from './ScrollTop.module.scss';

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      onClick={() => scroll.scrollToTop()}
      className={`${styles.scrollTop} ${scrollPosition >= 650 ? styles.visible : ''}`}
    >
      <div className={styles.indicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ScrollTop;
