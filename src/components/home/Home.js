import React from "react";
import "../../css/styles.css";
import { useState } from "react";
import Search from "../home/Search";
import Featured from "../featured/Featured";
import "../../css/featured.css";
import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const today = new Date();
  return (
    <>
      <div className="enquiry-wrapper">
        <div className="travel-search">
          <h4>Where do you want to stay?</h4>
          <p>Hotels and offers...</p>
          <Search />
          <hr></hr>
        </div>

        <div>
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

        <button className="enquiry-search">Search</button>
      </div>

      <div className="featured">
        <div className="featured-products">
          <h1>Featured</h1>
          <Featured />
        </div>
      </div>

      <div className="holidays">
        <h1 className="holidays-header">Holidays type</h1>

        <div className="holidays-wrapper">
          <div className="sightseeing">
            <i class="fas fa-shoe-prints"></i>
            <h4>Sightseeing</h4>
          </div>

          <div className="sightseeing">
            <i class="fas fa-ship"></i>
            <h4>Cruise</h4>
          </div>

          <div className="sightseeing">
            <i class="fas fa-umbrella-beach"></i>
            <h4>Beach</h4>
          </div>

          <div className="sightseeing">
            <i class="fas fa-city"></i>
            <h4>City breaks</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
