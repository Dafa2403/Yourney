import './styles/page1.css';
import { Navbar,Button,Container,Nav, NavbarBrand } from 'react-bootstrap';

function One() {

  return (
    <div className='App'>

    {/* NAVBAR */}
        <Navbar variant="dark" fixed='top' className='bgNav'>
          <Container>
            <Navbar.Brand>
              <img src={require("./img/logo.png")} width="283" height="90"></img>
            </Navbar.Brand>
            <Nav>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Portofolio </Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
    {/* Body 1 */}
      <div className='body'>
        <span className='tag'>MAKE IT JOURNEY IS YOURS !</span>
        <Button variant='success' className='Btn' size='lg'>GET STARTED</Button>
      </div>

    </div>
  );
}

export default One;
