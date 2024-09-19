import { FC } from 'react';
import styles from './ConteinerMainNews.module.css';
import Header from './Header/Header';
import ListCardNews from '../../Components/ListCardNews/ListCardNews';
import '../../Components/App/App.css'
//interface ConteinerMainNewsProps {}

const ConteinerMainNews: FC = () => (
    <div className="width-main-container">
        <Header />
        <hr className={styles.hr} />
        <div className={styles.BodyNews} >
            <ListCardNews n={6} />
            <ListCardNews n={6} />
        </div>
    </div>
);

export default ConteinerMainNews;
