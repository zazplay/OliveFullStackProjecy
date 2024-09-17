import { FC } from 'react';
import styles from './HeaderListCardNews.module.css';
import CardNews from '../../../CardNews/CardNews';

interface ListCardNewsProps {
    n: number
}

const HeaderListCardNews: FC<ListCardNewsProps> = ({ n }) => {
    const items = Array.from({ length: n }, (_, index) => (
        <CardNews key={index} />
    ));

    return <div className={styles.ListCardNews} >{items}</div>;

};

export default HeaderListCardNews;
