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
}

interface ListCardNewsProps {
    start?:number,//� ����� �������� ��������
    n: number,//������� ��������
    arrayNews: News[]//�������� �����
}

export const ListCardNews: FC<ListCardNewsProps> = ({ arrayNews,start=0,n }) => {

    const newArr = arrayNews.slice(start, n);//�������� ������ n ���������

    const items: React.ReactNode[] = newArr.map((item) =>
        item &&
        <CardNews key={item.id} obj={item} listObj={arrayNews} />);

    return <div className={styles.ListCardNews} >{items}</div>;

};

