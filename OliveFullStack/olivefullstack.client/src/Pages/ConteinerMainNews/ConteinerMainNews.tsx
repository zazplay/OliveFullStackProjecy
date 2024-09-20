import { FC, useEffect, useState } from 'react';
import styles from './ConteinerMainNews.module.css';
import Header from './Header/Header';
import '../../Components/App/App.css'
import axios from 'axios';
import { ListCardNews } from '../../Components/ListCardNews/ListCardNews';
//interface ConteinerMainNewsProps {}
interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
    //createdAt: string;
}

const ConteinerMainNews: FC = () => {
    const [listNews, setListNews] = useState<News[]>([])

    useEffect(() => {

        const handleLoad = async () => {
            const token = localStorage.getItem('token');
            console.log("handleLoad");

            try {
                // ����������� ������ � �������������� await
                const response = await axios.get("https://localhost:7142/PresentationNews", {
                    headers: {
                        'Authorization': `Bearer ${token}` // ��������� ����� � ���������
                    }
                });

                // �������� �����
                console.log("response", response.data);

                // ���������� ������ � ������
                if (response && response.data) {
                    setListNews(response.data);
                } // ��������������, ��� response.data �������� ������ �������


            } catch (e) {
                console.log(e);
            }
        }

        handleLoad();
    }, [])

    useEffect(() => {
        // �������� ����������� ��������� listNews
        console.log("Updated listNews", listNews);
    }, [listNews]);

    return (
        <div className="width-main-container">
            <Header array={listNews} />
            <hr className={styles.hr} />
            <div className="style-for-title-container">News</div>
            <div className={styles.BodyNews} >
                <ListCardNews n={6} arrayNews={listNews} />
                <ListCardNews n={6} arrayNews={listNews} />
            </div>
        </div>
    );
}

export default ConteinerMainNews;
