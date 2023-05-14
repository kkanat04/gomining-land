import styles from './FooterOption2.module.scss';

const FooterOption2 = () => {
  return (
    <footer className={styles.footerOption2}>
      <div className={styles.container}>
        <div>
          <p>© 2023 Gomining All rights reserved</p>
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p>Cookie policy</p>
        </div>
        <p>
          Gomining (BVI) Limited Trinity Chambers, PO Box 4301, Road Town, Tortola,
          British Virgin Islands
        </p>
      </div>
    </footer>
  );
};

export default FooterOption2;
