import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <spam className="ham">
          <i class="fas fa-bars"></i>
        </spam>
        <Container>
          <Navbar.Brand href="/">Online</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i class="fas fa-shopping-cart"></i>
              Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i class="fas fa-user"></i> Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
