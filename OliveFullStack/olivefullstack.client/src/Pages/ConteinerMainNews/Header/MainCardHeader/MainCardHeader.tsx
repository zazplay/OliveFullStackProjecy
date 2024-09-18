import { FC } from "react";
import { Card } from "react-bootstrap";
import styles from "./MainCardHeaderStyles.module.css";
import FooterMainCardHeader from "../FooterMainCardHeader/FooterMainCardHeader";

const MainCardHeader: FC = () => {


    return (
        <Card className={styles.mainCard} >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className={styles.cardBody} >
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <FooterMainCardHeader />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default MainCardHeader;

