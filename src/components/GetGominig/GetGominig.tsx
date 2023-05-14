import btc from '@/assets/image/btc.svg';
import gallery from '@/assets/image/gallery.svg';
import react from '@/assets/image/react.svg';

import styles from './GetGominig.module.scss';

const GetGominig = () => {
  return (
    <div className={styles.getGominig}>
      <p className={styles.title}>
        Что вы получаете с NFT <br /> <span>от gomining</span>
      </p>
      <div>
        <div>
          <img src={gallery} alt="" />
          <p>Диджитал-арт, который майнит биткоин</p>
        </div>
        <div>
          <img src={btc} alt="" />
          <p>Ежедневные награды в BTC на ваш кошелек</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>Выбор NFT по мощности и энергоэффективности</p>
        </div>
        <div>
          <p>
            Доходность <br /> от 30% годовых
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetGominig;
