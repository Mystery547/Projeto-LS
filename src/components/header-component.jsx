import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function HeaderComponent() {
  return (
  <>
    <Navbar className='mb-3' bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Senhor dos Anéis</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Início</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default HeaderComponent;