//import  { FC } from 'react';
import styles from './CardNews.module.css';
import FooterCardNews from '../FooterCardNews/FooterCardNews';
import imgPicture from "../../Img/img-academy-logo-400x356.jpg"
import { useNavigate } from 'react-router-dom';
//import { useStateNews } from '../../State/useStateNews';

//interface CardNewsProps {
//    id: string,
//    title: string,
//    description?: string,
//    imgPath: string,
//    source?: string
//}

export const CardNews = ({ id }: { id: string }) => {
    //const { setCurrentNewsId } = useStateNews();
    const navigate = useNavigate();

    const handleClick = () => {
        
        const data = {Id:id}
        navigate("/news", {state:data});

    }

    return (
        <div className={styles.CardNews} onClick={handleClick} >
            <img className={styles.imgStyles} src={imgPicture} />
            <div className={styles.ContainerInfo} >
                <div className={styles.cardBody} ><h2>Title Заголовок</h2></div>
                <FooterCardNews />
            </div>
        </div>
    );
}



