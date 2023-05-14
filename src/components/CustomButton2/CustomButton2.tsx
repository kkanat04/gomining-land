import arrow from '@/assets/image/arrow.svg';

import styles from './CustomButton2.module.scss';

const CustomButton2 = () => {
  return (
    <button className={styles.btn}>
      Получить тестовый NFT <img src={arrow} alt="" />
    </button>
  );
};

export default CustomButton2;
