import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.first}>
            <div>
              <p>
                Medium <ArrowOutwardIcon />
              </p>
              <p>
                Instagram <ArrowOutwardIcon />
              </p>
              <p>
                Facebook <ArrowOutwardIcon />
              </p>
            </div>
            <div>
              <p>
                Telegram <ArrowOutwardIcon />
              </p>
              <p>
                Twitter <ArrowOutwardIcon />
              </p>
            </div>
          </div>
          <div className={styles.second}>
            <div>
              <p>Блог</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div>
          <p>свяжитесь с нами</p>
          <div>
            <p>основные вопросы</p>
            <p>PR отдел</p>
            <p>отдел продаж</p>
            <p>Поддержка</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
