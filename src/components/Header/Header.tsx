import { useEffect, useState } from 'react';

import logo from '@/assets/image/logo.svg';
import logo2 from '@/assets/image/logo2.svg';

import styles from './Header.module.scss';

const Header = () => {
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
    <div className={`${styles.header} ${scrollPosition > 20 ? styles.header_black : ''}`}>
      <div>
        <img
          className={`${styles.img} ${scrollPosition <= 20 ? styles.visible : ''}`}
          src={logo}
          alt=""
        />
        <img
          className={`${styles.img} ${scrollPosition > 20 ? styles.visible : ''}`}
          src={logo2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
