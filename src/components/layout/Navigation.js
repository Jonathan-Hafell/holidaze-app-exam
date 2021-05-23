import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Login from "../login/Login";
import Hotels from "../hotels/Hotels";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import HotelDetail from "../hotels/HotelDetail";
import "../../css/styles.css";

function Layout() {
  return (
    <Router>
      <Navbar className="navbar" expand="lg">
        <NavLink to="/Home" exact>
          <Navbar.Brand className="logo">Holidaze</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="test" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-inner">
            <NavLink to="/Home" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/hotels" exact className="nav-link">
              Hotels
            </NavLink>
            <NavLink to="/about" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/about" component={Contact} />
          <Route path="/contact" component={Login} />
          <Route path="/detail/:id" component={HotelDetail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;
