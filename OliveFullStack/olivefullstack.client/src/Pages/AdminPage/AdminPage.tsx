import { FC } from 'react';
import styles from './AdminPage.module.css';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import "../../Components/App/App.css"


import ListNewsForAdmin from './ListNewsForAdmin/ListNewsForAdmin';
//import axios from 'axios';

const AdminPage: FC = () => {
    //const [allNews, setAllNews] = useState<[] | null>();

    //useEffect(() => {
    //    const token = localStorage.getItem('token');

    //    handleLoadNews = () => {
    //        const response = axios.get("https://localhost:7142/PresentationNews", {
    //            headers: {
    //                'Authorization': `Bearer ${token}` // ��������� ����� � ���������
    //            }
    //        }).then((resp) => {
    //            console.log(resp);
    //        }).catch((e) => console.log(e));

    //        console.log("response", response);

    //});

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
                <a href={"add_news"}>+ Publish</a>
                <Button>Delete</Button>
                <div>Sorting</div>
                <div>Filter</div>
                
            </div>
            <ListNewsForAdmin>


                    
                </ListNewsForAdmin>
            <div >
                <ListNewsForAdmin/>
            </div>
           

        </div>
    ); }

export default AdminPage;
