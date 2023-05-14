import energic from '@/assets/image/energic.svg';
import setting from '@/assets/image/setting.svg';
import time from '@/assets/image/time.svg';

import styles from './TraditionalMining.module.scss';

const TraditionalMining = () => {
  return (
    <div className={styles.traditionalMining}>
      <div>
        <p className={styles.title}>Традиционный майнинг vs NFT от GoMining</p>
        <div>
          <div>
            <p>Традиционный майнинг</p>

            <div>
              <div className={styles.col}>
                <p>Старт через несколько месяцев</p>
              </div>

              <div className={styles.col}>
                <p>Дорогой сервис и обслуживание</p>
              </div>

              <div className={styles.col}>
                <p>Рост мощности только через покупку новых майнеров</p>
              </div>
            </div>
          </div>

          <div>
            <p>NFT от GoMining</p>
            <div>
              <div className={styles.col}>
                <p>Старт с первого дня</p>
                <img src={time} alt="" />
              </div>

              <div className={styles.col}>
                <p>Команда GoMining берет всю работу на себя</p>
                <img src={setting} alt="" />
              </div>

              <div className={styles.col}>
                <p>Постоянный рост мощности NFT бесплатно</p>
                <img src={energic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalMining;
