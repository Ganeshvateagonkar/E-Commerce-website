import { Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Rating from "./Rating";
const CardComponent = ({ product }) => {
  const navigate = useNavigate();

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}`);
  };
  return (
    <>
      <Card style={{ width: "17rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            className="imageStylesComponent"
            src={product.image}
            fluid
            rounded
          />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Title style={{ fontWeight: "bold" }}>
              {product.name}
            </Card.Title>
          </Link>
          <Card.Text style={{ fontWeight: "bold" }}>
            Rs-{product.price}
          </Card.Text>
          <Card.Text>
            <Rating value={product.rating} text={product.numReviews} />
          </Card.Text>
          <Button type="button" variant="primary" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardComponent;
