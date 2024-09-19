import { FC } from 'react';
import globe from "../../Img/globe-grid-svgrepo-com.svg"
import item from "./HeaderSite.module.css";
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Заметьте, что иконка fa-user-bounty-hunter должна быть в доступной библиотеке

const HeaderSite: FC = () => (
    <Navbar className={item.HeaderSite} >
        <Navbar.Brand href="#" className="m-0" >
            <img src={globe} className={item.imgGlobe} />{' '}
        </Navbar.Brand>
        <div className={item.navigation} >
            <div style={{ display: "flex", flexDirection: 'row' }} >
                <Nav.Link href="#" className={item.link} style={{ marginLeft: "0.6rem" }} >EN&nbsp;</Nav.Link>
                <Nav.Link href="#" className={item.link}>UK</Nav.Link>
            </div>
            <Nav.Link href="home" className={item.logo}>Top<span style={{ color: "olivedrab" }} >News</span><span style={{ color: "orange" }} >Proger</span> </Nav.Link>
            <Nav.Link href="login" className={item.link}><FontAwesomeIcon icon={faUser} style={{ color: "#aab0bb", }} /></Nav.Link>
        </div>
        <Nav.Link href="admin" className={item.LinkAdmin}>Admin</Nav.Link>
    </Navbar>
);


export default HeaderSite;
