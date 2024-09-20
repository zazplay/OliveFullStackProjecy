import { FC } from 'react';
import styles from './ListNewsForAdmin.module.css';
import AdminNewsComp from '../AdminNewsComp/AdminNewsComp';
//import axios from 'axios';


const ListNewsForAdmin: FC = () => {
    //const [listNews, setListNews] = useState([]);

    //useEffect(() => {

    //    const respons = axios.get()


    //}, []);

    return (
        <div className={styles.ListNewsForAdmin}>
           <AdminNewsComp
            guidID='wigo3rhuogreogj3oinb'
            imageUrl="https://uk.in.ua/wp-content/uploads/2023/07/close-up-delicious_small.jpg"
            title="Top: Best Recipes with Olives"
            description="Olives today are already an absolutely familiar product in every home. Dishes with olives surprise with their variety: pizzas and all kinds of hot dishes, hot and cold appetizers, soups and, of course, salads."
            date="10.10.2010"
            editIconUrl="https://cdn-icons-png.flaticon.com/512/4277/4277132.png"
            onEditClick={() => console.log('Edit clicked')}
            />

        </div>
    );
} 

export default ListNewsForAdmin;
