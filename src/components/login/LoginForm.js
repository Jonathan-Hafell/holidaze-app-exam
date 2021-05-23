import "../../css/contact.css";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  return (
    <>
      <div className="login-container">
        <h1>login</h1>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="username"
              type="name"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
