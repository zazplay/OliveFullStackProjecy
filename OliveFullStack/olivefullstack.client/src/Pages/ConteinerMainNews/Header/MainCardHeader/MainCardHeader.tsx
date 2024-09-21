import { FC } from "react";
import { Card } from "react-bootstrap";
import styles from "./MainCardHeaderStyles.module.css";
import FooterMainCardHeader from "../FooterMainCardHeader/FooterMainCardHeader";

interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: Date;
}

interface TopNews {
    topNews: News
}

const MainCardHeader: FC<TopNews> = ({ topNews }) => {

    return (
        <Card className={styles.mainCard} >
            <Card.Img className={ styles.Img} variant="top" src={topNews?.imgSrc} />
            <Card.Body className={styles.cardBody} >
                <Card.Title className={styles.cardTitle} >{topNews?.title}</Card.Title>
                <Card.Text>
                    <FooterMainCardHeader date={topNews?.createdAt} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default MainCardHeader;

