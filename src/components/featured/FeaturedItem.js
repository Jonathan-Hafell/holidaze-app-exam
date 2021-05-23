import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FeaturedItem({ id, name, imageUrl, price, rating, reviews }) {
  return (
    <Card className="featured-card" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={imageUrl} alt="img" />
      <Card.Body className="card-inner">
        <div>
          <Card.Title className="card-name">{name}</Card.Title>
          <p className="price-from">
            One night from <span className="featured-price">{price} Kr</span>
          </p>
        </div>

        <Card.Text className="featured-ratings">
          <p>
            {rating} <i class="fas fa-star"></i>
          </p>
          <p className="featured-reviews">{reviews} Reviews</p>
        </Card.Text>
        <Link to={`detail/${id}`}>
          <Button className="featured-btn">
            Book now <i class="fas fa-long-arrow-alt-right"></i>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

FeaturedItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default FeaturedItem;
