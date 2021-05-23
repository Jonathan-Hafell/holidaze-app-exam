import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/hotels.css";

function HotelItem({ id, name, imageUrl, price, rating, reviews }) {
  return (
    <Card className="hotel-card">
      <Card.Img variant="top" src={imageUrl} alt="img" />
      <Card.Body className="card-inner">
        <div className="card-name">
          <Card.Title>{name}</Card.Title>
          <p>
            {rating} <i class="fas fa-star"></i>
          </p>
        </div>

        <Card.Text className="hotel-ratings">
          <p className="price-from">
            One night from <span className="hotel-price">{price} Kr</span>
          </p>
          <p>
            Based on <span className="hotel-reviews"> {reviews} Reviews</span>
          </p>
        </Card.Text>
        <Link to={`detail/${id}`}>
          <Button className="hotel-btn">
            Book now <i class="fas fa-long-arrow-alt-right"></i>
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default HotelItem;
