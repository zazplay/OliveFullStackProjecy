import { FC } from 'react';
import styles from './FooterMainCardHeader.module.css';


const FooterMainCardHeader: FC = () => (
  <div className={styles.FooterMainCardHeader}>
        <div className={styles.LogoAndTime} >
            <div>Logo and text</div>
            <div>time</div>
        </div>
        <div>date</div>
  </div>
);

export default FooterMainCardHeader;
