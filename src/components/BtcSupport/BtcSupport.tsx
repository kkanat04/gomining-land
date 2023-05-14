import arrowUp from '@/assets/image/arrow-up.svg';
import miner from '@/assets/image/miner.svg';
import mouse from '@/assets/image/mouse.svg';
import prosent from '@/assets/image/prosent2.svg';

import styles from './BtcSupport.module.scss';

const BtcSupport = () => {
  return (
    <div className={styles.btcSupport}>
      <div>
        <p>
          Мы поможем вам еще больше <span>увеличить ваши награды в BTC</span>
        </p>
        <div>
          <div>
            <img src={arrowUp} alt="" />
            <p>Увеличивайте свой уровень фермы, приобретая новые NFT</p>
          </div>
          <div>
            <img src={mouse} alt="" />
            <p>Обслуживайте через кнопку Service свои NFT каждый день</p>
          </div>
          <div>
            <img src={prosent} alt="" />
            <p>Оплачивайте отчисления в GMT токенах со скидкой 10%</p>
          </div>
        </div>
      </div>
      <img src={miner} alt="" />
    </div>
  );
};

export default BtcSupport;
