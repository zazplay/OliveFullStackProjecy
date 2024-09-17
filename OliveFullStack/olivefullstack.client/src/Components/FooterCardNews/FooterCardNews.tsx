import{ FC } from 'react';
import styles from './FooterCardNews.module.css';

//interface FooterCardNewsProps {}

const FooterCardNews: FC= () => (
    <div className={styles.FooterCardNews}>
        <div style={{ display: "flex", flexDirection: "row"}} >
            <div>Logo and text</div>
            <div>time</div>
        </div>
        <div style={{ textAlign:"right" }} >date</div>
  </div>
);

export default FooterCardNews;
