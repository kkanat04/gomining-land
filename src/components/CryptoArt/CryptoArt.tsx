import art from '@/assets/image/art.svg';
import CustomButton2 from '@/components/CustomButton2/CustomButton2';

import styles from './CryptoArt.module.scss';

const CryptoArt = () => {
  return (
    <div className={styles.cryptoArt}>
      <div className={styles.col}>
        <div>
          <p className={styles.title}>
            Воспользуйтесь возможностью <br /> бесплатно потестить наши NFT <br /> в
            течение 14 дней
          </p>
          <CustomButton2 />
        </div>
        <img src={art} alt="" />
      </div>
    </div>
  );
};

export default CryptoArt;
