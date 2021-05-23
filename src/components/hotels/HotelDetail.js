import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../css/details.css";
import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const today = new Date();

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hotel.imageUrl}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hotel.imageUrl2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hotel.imageUrl3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="hotel-details">
        <div className="details-head">
          <h1>{hotel.name}</h1>
          <span>
            {hotel.rating} <i class="fas fa-star"></i>
          </span>
        </div>

        <div className="ratings">
          <p>
            Based on <span>{hotel.reviews} Reviews</span>
          </p>
        </div>
        <h2 className="details-price">{hotel.price} Kr</h2>
        <p>{hotel.description}</p>

        <Button className="details-btn" onClick={handleShow}>
          Book now <i class="fas fa-long-arrow-alt-right"></i>
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Booking of {hotel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Thank you for booking a room at {hotel.name}!</h6>
            <br></br>
            <p>To proceed with the booking, complete the form an click "Yes"</p>
            <p>
              One night from{" "}
              <span className="modal-price">{hotel.price} Kr</span>
            </p>
            <div className="people-mod">
              <div className="adults-mod">
                <p>Adults:</p>
                <NumericInput className="form-control" value={1} />
              </div>

              <div className="children-mod">
                <p>Children:</p>
                <NumericInput className="form-control" value={1} />
              </div>
            </div>
            <div>
              <p className="checkin">Check in</p>
              <DatePicker
                className="datepicker"
                dateFormat="dd/MM/yyyy"
                disabledDays={{ before: today }}
                showWeekNumbers
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />{" "}
              <i class="far fa-calendar-alt"></i>
            </div>
            <div>
              <p className="checkout">Check out</p>
              <DatePicker
                className="datepicker"
                dateFormat="dd/MM/yyyy"
                disabledDays={{ before: today }}
                showWeekNumbers
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />{" "}
              <i class="far fa-calendar-alt"></i>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Yes, book now</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default HotelDetail;
