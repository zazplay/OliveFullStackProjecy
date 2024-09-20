import { FC } from 'react';
import styles from './ListCardNews.module.css';
import { CardNews } from '../CardNews/CardNews';

interface ListCardNewsProps {
    n: number
}

const ListCardNews: FC<ListCardNewsProps> = ({ n }) => {




    const items = Array.from({ length: n }, (_, index) => (
        <CardNews key={index} id={"90954955-c037-45b5-9501-724c06110380"} />
    ));

    return <div className={ styles.ListCardNews} >{items}</div>;

};

export default ListCardNews;
