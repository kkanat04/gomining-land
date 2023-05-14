import energic2 from '@/assets/image/energic2.svg';
import iphone from '@/assets/image/iphone.svg';
import medal from '@/assets/image/medal.svg';
import prosent from '@/assets/image/prosent.svg';

import styles from './ProfitableMining.module.scss';

const ProfitableMining = () => {
  return (
    <div className={styles.profitableMining}>
      <div className={styles.col}>
        <img src={iphone} alt="" />
        <div>
          <p>Выгодный майнинг начинается сразу после покупки NFT</p>
          <div>
            <div>
              <img src={energic2} alt="" />
              <p>Стоимость электричества в наших дата-центрах ниже рыночной</p>
            </div>
            <div>
              <img src={prosent} alt="" />
              <p>
                Мы предоставляем скидки на оплату обслуживания, что увеличивает размер
                наград
              </p>
            </div>
            <div>
              <img src={medal} alt="" />
              <p>Игра в пуле может приносить гораздо больше ВТС, чем в соло-майнинге</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitableMining;
