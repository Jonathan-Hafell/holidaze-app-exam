import React from "react";
import "../../css/styles.css";
import Search from "../home/Search";
import Featured from "../featured/Featured";

function Home() {
  return (
    <>
      <div className="bg-home">
        <div className="enquiry-wrapper">
          <div className="travel-search">
            <h4>Where do you want to stay?</h4>
            <p>Hotels and offers...</p>
            <Search />
            <hr></hr>
          </div>

          <div className="selection">
            <div>
              <label for="room">Room</label>

              <select id="room">
                <option label="1">1</option>
                <option label="2">2</option>
                <option label="3">3</option>
                <option label="4">4</option>
                <option label="5">5</option>
                <option label="6">6</option>
              </select>
            </div>

            <div className="people">
              <div>
                <label for="adults">Adults</label>

                <select id="adults">
                  <option label="1">1</option>
                  <option label="2">2</option>
                  <option label="3">3</option>
                  <option label="4">4</option>
                  <option label="5">5</option>
                  <option label="6">6</option>
                </select>
              </div>

              <div>
                <label for="children">Children</label>

                <select id="children">
                  <option label="1">1</option>
                  <option label="2">2</option>
                  <option label="3">3</option>
                  <option label="4">4</option>
                  <option label="5">5</option>
                  <option label="6">6</option>
                </select>
              </div>
            </div>
          </div>
          <hr></hr>
          <button className="enquiry-search">Search</button>
        </div>
      </div>

      <div className="featured">
        <div className="featured-products">
          <h1>Featured</h1>
          <Featured />
        </div>
      </div>

      <div>
        <h1>Holidays type</h1>

        <div></div>
      </div>
    </>
  );
}

export default Home;
