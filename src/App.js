import "./App.css";
import Navigation from "./components/layout/Navigation";
import "../src/css/footer.css";

function App() {
  return (
    <>
      <Navigation />

      <footer>
        <div className="inner-fot">
          <div className="column">
            <h2>MORE INFORMATION</h2>
            <a className="contact-nr" href="tel:12 34 56 78">
              12 34 56 78
            </a>
          </div>
          <div className="column">
            <p className="contact-info">
              Holidaze
              <br></br>
              Helgesens gate 1-3, 0551 Oslo
              <br></br>
              Postboks 4734 Nydalen, 0421 Oslo
              <br></br>
              <a className="contact-mail" href="mailto:contact@holidaze.com">
                Contact@holidaze.com
              </a>
            </p>
          </div>
          <div className="column">
            <h2>FOLLOW US</h2>
            <div className="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
