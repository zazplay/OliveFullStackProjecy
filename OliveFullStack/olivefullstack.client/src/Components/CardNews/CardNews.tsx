import  { FC } from 'react';
import styles from './CardNews.module.css';
import FooterCardNews from '../FooterCardNews/FooterCardNews';
//import imgPicture from "../../Img/img-academy-logo-400x356.jpg"
import { useNavigate } from 'react-router-dom';

interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
    //createdAt: string;
}

interface ObjNews {
    obj: News
}
export const CardNews: FC<ObjNews> = ({ obj }) => {

    const navigate = useNavigate();

    const handleClick = () => {

        const data = { Id: obj.id }
        navigate("/news", {state:data});

    }


    return (
        <div className={styles.CardNews} onClick={handleClick} >
            <img className={styles.imgStyles} src={obj.imgSrc} />
            <div className={styles.ContainerInfo} >
                <div className={styles.cardBody} >{obj.title}</div>
                <FooterCardNews date={obj.createdAt} />
            </div>
        </div>
    );
}



