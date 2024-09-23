import { FC } from 'react';
import styles from './ListNewsForAdmin.module.css';
import AdminNewsComp from '../AdminNewsComp/AdminNewsComp';
import { format } from 'date-fns';//��� �������������� ����
interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
}

interface ObjNews {
    listObj: News[],//���� ��������
    setListOnDelete: (ids: string[]) => void,//����� ������� ������ ���� ��� ��������
    listOnDelete: string[] //���� ���� ����� �������� id ������� �� ��������
}
const ListNewsForAdmin: FC<ObjNews> = ({ listObj, setListOnDelete, listOnDelete }) => {
    //����������� ����
    function dateString(date: Date) {
        const currentDate: Date = date;
        const formattedDate: string = format(currentDate, 'dd/MM/yyyy');
        return formattedDate;
    }

    return (
        <div className={styles.ListNewsForAdmin}>
            {listObj.map((news, i) => {

                return (<AdminNewsComp key={i}
                    guidID={news.id}
                    imageUrl={news.imgSrc}
                    title={news.title}
                    description={news.description}
                    date={dateString(news.createdAt)}
                    editIconUrl="https://cdn-icons-png.flaticon.com/512/4277/4277132.png"
                    onEditClick={() => console.log('Edit clicked')}
                    listNewsOnDelete={listOnDelete}
                    addNewsToListOnDelete={setListOnDelete}
                />)
            })
            }
        </div>
    );
}

export default ListNewsForAdmin;
