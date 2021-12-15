import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Image,
  Button,
  Card,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cardActions";
const CartScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [id, qty, dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkOutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <h1 className="heading">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        thumbnail
                        rounded
                        className="imageStyle"
                      />
                    </Col>
                    <Col
                      md={3}
                      style={{ marginTop: "1rem", textAlign: "center" }}
                    >
                      <Link
                        className="linkStyle textStyle"
                        to={`/product/${item.product}`}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col
                      md={2}
                      style={{ marginTop: "1rem", textAlign: "center" }}
                      className="textStyle"
                    >
                      Rs-{item.price}
                    </Col>
                    <Col
                      md={2}
                      style={{ marginTop: "1rem", marginLeft: "1.2rem" }}
                    >
                      <FormControl
                        as="select"
                        style={{ width: "70%", textAlign: "center" }}
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                    <Col
                      md={2}
                      style={{ marginTop: "1rem", textAlign: "center" }}
                    >
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <ListGroup>
              <ListGroupItem>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  )
                </h2>
                <h5>
                  Rs-
                  {cartItems.reduce(
                    (acc, item) => acc + item.qty * item.price,
                    0
                  )}
                </h5>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkOutHandler}
                  style={{ width: "100%" }}
                >
                  Proceed to checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default CartScreen;
