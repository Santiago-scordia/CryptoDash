import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../utils/NavBar.css';


function NavBar() {
    
    return (
        <>
            <Navbar className='NavBar' variant="dark">
                <Container>
                <img alt="Logo" src={logo} width="40" height="auto" className='logo' />
                <Navbar.Brand className='branding' href="#home">CryptoDash</Navbar.Brand>
                <Nav className="me-auto ">
                <Nav.Link className="NavLinks text-navbar" href="#graphics">Gráficos</Nav.Link>
                <Nav.Link className="NavLinks" href="#tables">Tablas</Nav.Link>
                <Nav.Link className="NavLinks" href="#tops">Tops</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
        );
    }

export default NavBar;