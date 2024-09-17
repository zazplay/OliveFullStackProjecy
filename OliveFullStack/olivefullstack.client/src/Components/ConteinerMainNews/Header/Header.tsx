import { FC } from "react";
import styles from "./HeaderStyles.module.css";
import { Card, Container } from "react-bootstrap";
import FooterCardNews from "../../FooterCardNews/FooterCardNews";
import HeaderListCardNews from "./ListCardNews/HeaderListCardNews";

const Header: FC = () => {

    return (
        <>
            <h1 className={styles.h1} >Today in the <span className={styles.news} >news</span></h1>
            <Container className={styles.container} >
                <Card className={ styles.mainCard} >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body className={styles.cardBody} >
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            <FooterCardNews/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Container>
                    <HeaderListCardNews n={3} />
                </Container>
                
            </Container>
        </>)
}

export default Header;