import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HotelItem({ id, name }) {
  return (
    <Link to={`detail/${id}`}>
      <h5>{name}</h5>
    </Link>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default HotelItem;
