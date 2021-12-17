import { Navbar, Container, Nav, Button } from "react-bootstrap";
const Header = () => {
  const hamBurgerHandle = {};
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Button onClick={hamBurgerHandle}>
          <spam className="ham">
            <i class="fas fa-bars"></i>
          </spam>
        </Button>

        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "1.1rem" }}>
            E-COMMERCE
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i class="fas fa-shopping-cart"></i>Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i class="fas fa-user"></i>Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
