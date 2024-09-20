import { FC } from 'react';
import styles from './PageCurentNews.module.css';
import SectionNews from './SectionNews/SectionNews';
import "../../Components/App/App.css"


const PageCurentNews: FC = () => {
    return (
        <div className="width-main-container">
            <div className={styles.PageCurentNews}>
                <SectionNews />
                {/*<ListCardNews n={6} arrayNews={listNewsMemory} />*/}
            </div>
        </div>
        
    );
}

export default PageCurentNews;
