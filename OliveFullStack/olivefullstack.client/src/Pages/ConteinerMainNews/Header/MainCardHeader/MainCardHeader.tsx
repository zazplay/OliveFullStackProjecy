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
    //createdAt: string;
}

interface TopNews {
    topNews: News
}

const MainCardHeader: FC<TopNews> = ({ topNews }) => {

    return (
        <Card className={styles.mainCard} >
            <Card.Img className={ styles.Img} variant="top" src={topNews?.imgSrc} />
            <Card.Body className={styles.cardBody} >
                <Card.Title>{topNews?.title}</Card.Title>
                <Card.Text>
                    <FooterMainCardHeader />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default MainCardHeader;

