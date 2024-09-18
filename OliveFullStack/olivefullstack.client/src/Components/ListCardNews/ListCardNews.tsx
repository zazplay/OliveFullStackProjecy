import { FC } from 'react';
import styles from './ListCardNews.module.css';
import CardNews from '../CardNews/CardNews';

interface ListCardNewsProps {
    n: number
}

const ListCardNews: FC<ListCardNewsProps> = ({ n }) => {
    const items = Array.from({ length: n }, (_, index) => (
        <CardNews key={index} />
    ));

    return <div className={ styles.ListCardNews} >{items}</div>;

};

export default ListCardNews;
