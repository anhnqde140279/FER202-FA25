import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setShowModal(true);
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header><h4 className="text-center">Login</h4></Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton><Modal.Title>Login Successful</Modal.Title></Modal.Header>
        <Modal.Body>Welcome, {username}!</Modal.Body>
      </Modal>
    </Container>
  );
}
export default LoginForm;
