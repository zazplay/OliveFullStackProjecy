import{ FC } from 'react';
import styles from './FooterCardNews.module.css';
import Logo from '../Logo/Logo';
//interface FooterCardNewsProps {}

const FooterCardNews: FC= () => (
    <div className={styles.FooterCardNews}>
        <div className={styles.LogoAndTime} >
            <Logo/>
            <div>time</div>
        </div>
        <div>date</div>
  </div>
);

export default FooterCardNews;
