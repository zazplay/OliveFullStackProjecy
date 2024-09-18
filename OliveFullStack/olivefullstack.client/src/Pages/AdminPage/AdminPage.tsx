import { FC } from 'react';
import styles from './AdminPage.module.css';
import AddNews from './AddNews/AddNews';
import UpdateNews from './UpdateNews/UpdateNews';
import RemoveNews from './RemoveNews/RemoveNews';

const AdminPage: FC = () => {


    return (
        <div className={styles.AdminPage}>
            <AddNews />
            <UpdateNews />
            <RemoveNews />
        </div>
    ); }

export default AdminPage;
