import { FC } from 'react';
import styles from './PageCurentNews.module.css';
import ListCardNews from '../../Components/ListCardNews/ListCardNews';
import SectionNews from './SectionNews/SectionNews';

const PageCurentNews: FC = () => {
    return (
        <div className={styles.PageCurentNews}>
            <SectionNews />
            <ListCardNews n={ 10}/>
        </div>
    );
}

export default PageCurentNews;
