import bg from '@/assets/image/infoBg.jpg';
import CustomButton2 from '@/components/CustomButton2/CustomButton2';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <p>Присоединяйтесь к NFT-революции в майнинге</p>
        <p>
          Постройте свой майнинговый бизнес онлайн и получайте ежедневные вознаграждения в
          ВТС
        </p>
        <CustomButton2 />
      </div>
      <img src={bg} alt="" />
    </div>
  );
};

export default Info;
