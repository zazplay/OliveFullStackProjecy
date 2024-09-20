import { FC } from 'react';
import styles from './ListCardNews.module.css';
import { CardNews } from '../CardNews/CardNews';

interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
    //createdAt: string;
}

interface ListCardNewsProps {
    n: number,
    arrayNews: News[]
}

export const ListCardNews: FC<ListCardNewsProps> = ({ arrayNews,n }) => {

    const newArr = arrayNews.slice(0, n);//получаем первые n елементов

    const items: React.ReactNode[] = newArr.map((item) =>
        item &&
        <CardNews key={item.id} obj={item} />);

    return <div className={styles.ListCardNews} >{items}</div>;

};

