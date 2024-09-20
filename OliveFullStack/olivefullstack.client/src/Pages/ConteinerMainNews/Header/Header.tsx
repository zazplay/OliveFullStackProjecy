import { FC } from "react";
import styles from "./HeaderStyles.module.css";
import { Container } from "react-bootstrap";
import HeaderListCardNews from "./ListCardNews/HeaderListCardNews";
import MainCardHeader from "./MainCardHeader/MainCardHeader";

interface News {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    source: string;
    createdAt: string;
}

interface ArrayNews {
    array: News[]
}

//шапка главной страници с новостями(там где одна большая новость и 3 маленьких)
//принимает масив новостей и нередает дальше по компонентам
const Header: FC<ArrayNews> = ({ array }) => {

    return (
        <>
            <h1 className={styles.h1} >Today in the <span className={styles.news} >news</span></h1>
            <Container className={styles.container} >
                <MainCardHeader topNews={array[0]} />
                <Container>
                    <HeaderListCardNews n={3} />
                </Container>

            </Container>
        </>)
}

export default Header;