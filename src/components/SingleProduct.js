import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const SingleProduct = ({ prod, show = true }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(show);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
          {show ? (
            <Link to={`/products/${prod.id}`}>
              <Button 
                variant="warning"
                style={{ width: "", margin: "0 10px" }}>
                More details
              </Button>
            </Link>
          ) : (
            <Link to={'/'}>
              <Button 
                variant="secondary"
                style={{ width: "", margin: "0 10px" }}>
                Go Back!
              </Button>
            </Link>
          )}
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
