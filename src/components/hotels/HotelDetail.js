import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
/* import { API } from "../../constants/api"; */
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  /* const url = BASE_URL + HOTELS_ENDPOINT + "/" + id; */

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(`${BASE_URL}/${HOTELS_ENDPOINT}/${id}`);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setHotel(json);
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
    },
    [id]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="book-detail">
      <h1>{hotel.name}</h1>
      <img src={hotel.imageUrl}></img>
    </div>
  );
}

export default HotelDetail;
