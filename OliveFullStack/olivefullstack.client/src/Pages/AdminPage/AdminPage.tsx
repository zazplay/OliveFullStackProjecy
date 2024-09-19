import { FC } from 'react';
import styles from './AdminPage.module.css';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';

const AdminPage: FC = () => {


    return (
        <div className={styles.AdminPage}>
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
                <a href={"#"}>+ Publish</a>
                <Button>Delete</Button>
                <div>Sorting</div>
                <div>Filter</div>
            </div>
            <div >

            </div>
           

        </div>
    ); }

export default AdminPage;
