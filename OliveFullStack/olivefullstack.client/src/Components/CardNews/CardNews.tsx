import  { FC } from 'react';
import styles from './CardNews.module.css';
import FooterCardNews from '../FooterCardNews/FooterCardNews';
import imgPicture from "../../Img/img-academy-logo-400x356.jpg"

const CardNews: FC = () => (
    <div className={styles.CardNews} >
        <img className={styles.imgStyles} src={imgPicture} />
        <div className={styles.ContainerInfo} >
            <div className={styles.cardBody} ><h2>Title</h2></div>
            <FooterCardNews />
        </div>
    </div>
);

export default CardNews;
