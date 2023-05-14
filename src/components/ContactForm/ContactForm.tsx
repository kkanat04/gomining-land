import CustomButton from '@/components/CustomButton/CustomButton';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.col}>
        <div>
          <p>свяжитесь с нами</p>
          <p>И получите свой первый NFT, который майнит биткоин как настоящий майнер.</p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Имя" />
            <input type="number" placeholder="Номер телефона" />
            <input type="text" placeholder="Email" />
          </div>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
