import { useState, useEffect } from "react";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import FeaturedItem from "../featured/FeaturedItem";

function Featured() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/${HOTELS_ENDPOINT}`);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setFeatured(json);
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
    <div className="featured">
      {featured.map(function (hotel) {
        const { id, name, imageUrl, price, rating, reviews } = hotel;

        if (hotel.featured === false) {
          return true;
        }
        return (
          <>
            <FeaturedItem
              key={id}
              id={id}
              name={name}
              price={price}
              rating={rating}
              reviews={reviews}
              imageUrl={imageUrl}
            />
          </>
        );
      })}
    </div>
  );
}

export default Featured;
