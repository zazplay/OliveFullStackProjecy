import { FC, useEffect, useState } from 'react';
import styles from './AdminPage.module.css';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import "../../Components/App/App.css"
import ListNewsForAdmin from './ListNewsForAdmin/ListNewsForAdmin';
import axios from 'axios';
//import axios from 'axios';

interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
}

const AdminPage: FC = () => {
    const [listNewsIdOnDelete, setListNewsIdOnDelete] = useState<string[]>([]);
    const [listNews, setListNews] = useState<News[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    //отримання всих новин
    useEffect(() => {

        const handleLoad = async () => {
            const token = localStorage.getItem('token');
            console.log("handleLoad");

            try {
                // Асинхронный запрос с использованием await
                const response = await axios.get("https://localhost:7142/PresentationNews", {
                    headers: {
                        'Authorization': `Bearer ${token}` // Добавляем токен в заголовок
                    }
                });

                // Логируем ответ
                console.log("response", response.data);

                // Записываем данные в массив
                if (response && response.data) {
                    setListNews(response.data);
                } // Предполагается, что response.data содержит массив заметок


            } catch (e) {
                console.log(e);
            }
        }

        handleLoad();
    }, [reload])

    useEffect(() => {
        // Логируем обновленное состояние listNews
        console.log("Updated listNews", listNews);
    }, [listNews]);

    //функция видалення новин
    const handleClick = async () => {
        if (listNewsIdOnDelete === null) return;
        console.log("Delete button");
        console.log('listNewsIdOnDelete', listNewsIdOnDelete);
        setReload(!reload);//перезавантазення списку новин

        //try {

        //    await axios.delete(`https://localhost:7142/PresentationNews/${listNewsIdOnDelete[0]?.id}`);
        //    setReload(!reload);//перезавантазення списку новин
        //}
        //catch (err) {
        //    console.log("err",err)
        //}


    }

    return (
        <div className="width-main-container">
            <div className={styles.AdminTitle} >Admin <span style={{ color: "skyblue" }} >panel</span> </div>
            <div className={styles.ConteinerCRUDOperation} >
                <div><InputGroup className="mb-3 w-75">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                </div>
                <a href={"add_news"} className={styles.Publish} >+ Publish</a>
                <button className={styles.BtnDeleteStyle} onClick={handleClick} >Delete</button>
                <div className={styles.Publish}>Sorting</div>
                <div className={styles.Publish}>Filter</div>

            </div>
            <ListNewsForAdmin listObj={listNews} listOnDelete={listNewsIdOnDelete} setListOnDelete={setListNewsIdOnDelete} />

        </div>
    );
}

export default AdminPage;
