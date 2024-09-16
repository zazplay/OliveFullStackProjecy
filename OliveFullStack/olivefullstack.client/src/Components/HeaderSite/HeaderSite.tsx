import { FC } from 'react';
import globe from "../../Img/globe-grid-svgrepo-com.svg"
import item from "./HeaderSite.module.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
//interface HeaderSiteProps {}

const HeaderSite: FC = () => (
    <Navbar className={item.HeaderSite} >
        <Navbar.Brand href="#home" className="m-0" >
            <img src={globe} className={item.imgGlobe} />{' '}
        </Navbar.Brand>
        <Container >
            <div style={{ display: "flex", flexDirection: 'row' }} >
                <Nav.Link href="#" className={item.link} style={{ marginLeft:"0.6rem" }} >EN&nbsp;</Nav.Link>
                <Nav.Link href="#" className={item.link}>UK</Nav.Link>
            </div>
            <Nav.Link href="#" className={item.logo}>Vivo<span style={{ color: "olivedrab" }} >Olio</span> <span style={{ color: "orange" }} >News</span> </Nav.Link>
            <Nav.Link href="#" className={item.link}></Nav.Link>
        </Container>

    </Navbar>
);


export default HeaderSite;
