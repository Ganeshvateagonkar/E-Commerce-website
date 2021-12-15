import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";

const ProductInfoScreen = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const { id } = useParams();
  console.log(id);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const addTocart = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col sm={12} lg={6}>
            <Image thumbnail src={product.image}></Image>
          </Col>
          <Col sm={12} lg={3} style={{ marginTop: "50px" }}>
            <div style={{ marginBottom: "8px" }}>
              <strong>Name:</strong> {product.name}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Price:</strong>Rs- {product.price}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Brand:</strong> {product.brand}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <strong>Description:</strong> {product.description}
            </div>
            <div>
              <Rating value={product.rating} text={product.numReviews} />
            </div>
          </Col>
          <Col
            sm={12}
            lg={3}
            style={{ marginTop: "30px", marginBottom: "10px" }}
          >
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Price: </strong>
                    </Col>
                    <Col>Rs-{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Status: </strong>
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? "InStock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Qty:</strong>
                      </Col>
                      <Col>
                        <FormControl
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </FormControl>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    variant="primary"
                    className="btn-block"
                    style={{ width: "100%" }}
                    onClick={addTocart}
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default ProductInfoScreen;
