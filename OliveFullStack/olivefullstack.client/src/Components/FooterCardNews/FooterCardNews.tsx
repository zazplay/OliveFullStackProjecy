import{ FC } from 'react';
import styles from './FooterCardNews.module.css';

//interface FooterCardNewsProps {}

const FooterCardNews: FC= () => (
    <div className={styles.FooterCardNews}>
        <div className={styles.LogoAndTime} >
            <div>Logo and text</div>
            <div>time</div>
        </div>
        <div>date</div>
  </div>
);

export default FooterCardNews;
