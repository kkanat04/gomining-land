import Slider from '@/components/Slider/Slider';

import styles from './SelectMining.module.scss';

const SelectMining = () => {
  return (
    <div className={styles.selectMining}>
      <div>
        <p>Выберите свой майнер</p>
        <p>В ЧЕМ РАЗНИЦА МЕЖДУ МАЙНЕРАМИ?</p>
      </div>
      <Slider />
    </div>
  );
};

export default SelectMining;
