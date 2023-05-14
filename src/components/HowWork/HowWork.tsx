import img1 from '@/assets/image/howWork1.png';
import img2 from '@/assets/image/howWork2.png';

import styles from './HowWork.module.scss';

const HowWork = () => {
  return (
    <div className={styles.howWork}>
      <p className={styles.title}>Как это работает</p>
      <div>
        <div>
          <div>
            <div>1</div>
            <p>
              NFT от GoMining — это реальный майнинг, в котором вы выбираете мощность,
              энергоэффективность оборудования и решаете, как майнить: соло или в пуле.
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div>
          <div>
            <div>2</div>
            <p>
              Вам не нужно волноваться о выборе поставщика, доставке и подключении
              оборудования, об его дорогостоящем обслуживании и о стоимости электричества.
            </p>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowWork;
