import { useState, useEffect } from "react";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import HotelItem from "./HotelItem";
import "../../css/hotellist.css";
/* import Button from "react-bootstrap/Button"; */

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/${HOTELS_ENDPOINT}`);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setHotels(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="hotels">
      {hotels.map(function (hotel) {
        const { id, name, imageUrl, price, rating, reviews } = hotel;
        return (
          <HotelItem
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
            rating={rating}
            reviews={reviews}
          />
        );
      })}
    </div>
  );
}

export default Hotels;
