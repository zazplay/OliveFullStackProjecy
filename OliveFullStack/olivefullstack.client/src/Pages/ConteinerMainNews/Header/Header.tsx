import { FC } from "react";
import styles from "./HeaderStyles.module.css";
import { Container } from "react-bootstrap";
import HeaderListCardNews from "./ListCardNews/HeaderListCardNews";
import MainCardHeader from "./MainCardHeader/MainCardHeader";

const Header: FC = () => {

    return (
        <>
            <h1 className={styles.h1} >Today in the <span className={styles.news} >news</span></h1>
            <Container className={styles.container} >
                <MainCardHeader/>
                <Container>
                    <HeaderListCardNews n={3} />
                </Container>

            </Container>
        </>)
}

export default Header;