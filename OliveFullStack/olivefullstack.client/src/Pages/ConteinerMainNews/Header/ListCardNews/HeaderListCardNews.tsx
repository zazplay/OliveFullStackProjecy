import { FC } from 'react';
import styles from './HeaderListCardNews.module.css';
import { CardNews } from '../../../../Components/CardNews/CardNews';
interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: string;
}
interface HeaderListCardNewsProps {
    n: number,
    arrayNews: News[]
}

//��������� � 3 ���������� � ����� �� ������� �� ������� ��������
const HeaderListCardNews: FC<HeaderListCardNewsProps> = ({ n, arrayNews }) => {
    const newArr = arrayNews.slice(0, n);//�������� ������ n ���������

    const items: React.ReactNode[] = newArr.map((item) =>
        item &&
        <CardNews key={item.id} obj={item} />);//���� ������� ���������� ����� ��� � ��������

    return <div className={styles.ListCardNews} >{items}</div>;
};

export default HeaderListCardNews;
