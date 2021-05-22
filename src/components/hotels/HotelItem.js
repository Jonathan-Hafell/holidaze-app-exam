import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HotelItem({ id, name, imageUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} alt="img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`detail/${id}`}>
          <Button variant="primary">Go somewhere</Button>
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

/* return (
              <a key={result.id} href={result.imageUrl} className="result-item">
                <h6 className="image-name">{result.name}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={result.imageUrl}
                    alt={result.name}
                  />
                </div>
              </a>
            );
          })} */
